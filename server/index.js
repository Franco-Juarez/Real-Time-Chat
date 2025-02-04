import express from 'express'
import logger from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import dotenv from 'dotenv'
import { createClient } from '@libsql/client'
import corsMiddleware from './middleware/cors.js'

dotenv.config()
const port = process.env.PORT || 3000

const app = express()
app.use(corsMiddleware)
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: { corsMiddleware },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  },
  connectionStateRecovery: {}
})

const db = createClient({
  url: 'libsql://chat-db-franco-juarez.turso.io',
  authToken: process.env.DB_TOKEN
})

await db.execute(`
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

io.on('connection', async (socket) => {
  console.log('A user connected')

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })

  socket.on('chat message', async (message) => {
    let result
    try {
      result = await db.execute({
        sql: 'INSERT INTO messages (message, username) VALUES (:message, :username)',
        args: { message: message.message, username: message.username }
      })
    } catch (error) {
      console.error(error)
      return
    }

    io.emit('chat message', { msg: message.message, username: message.username }, result.lastInsertRowid.toString())
  })

  if (!socket.recovered) {
    try {
      const serverOffset = socket.handshake.auth.serverOffset ?? 0
      const results = await db.execute({
        sql: 'SELECT id, message, username FROM messages WHERE id > ?',
        args: [serverOffset]
      })
      results.rows.forEach(row => {
        socket.emit('chat message', { msg: row.message, username: row.username }, row.id)
      })
    } catch (error) {
      console.log(error)
    }
  }
})

app.use(express.json())
app.use(logger('dev'))
app.use(express.static(process.cwd() + '/client/dist'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/dist/index.html')
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
