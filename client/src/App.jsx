import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [serverOffset, setServerOffset] = useState(0);
  const messagesRef = useRef(null);

  const getUsername = async () => {
    const username = localStorage.getItem('username');
    if (username) {
      return username;
    }

    const res = await fetch('https://random-data-api.com/api/users/random_user');
    const { username: randomUsername } = await res.json();
    localStorage.setItem('username', randomUsername);
    return randomUsername;
  };

  useEffect(() => {
    const fetchUsername = async () => {
      const username = await getUsername();
      setUsername(username);
    };
    fetchUsername();
  }, []);

  useEffect(() => {
    if (!username) return

    const socket = io("http://localhost:3000", {
      auth: {
        serverOffset: serverOffset,
        username: username
      },
    });

    socket.on("chat message", (msg, offset) => {
      setMessages((prev) => [...prev, msg]);
      setServerOffset(offset);
    });

    return () => {
      socket.disconnect();
    };
  }, [username]);

  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      const socket = io("http://localhost:3000");
      socket.emit("chat message", { message: message, username: username });
      setMessage("");
    }
  };

  return (
    <main className="chat-wrapper">
      <h1>Chat en tiempo real</h1>
      <div className="chat-container">
        <ul>
          {messages.length === 0 ? (
            <p>¡Rompé el hielo 🧊!</p>
          ):
          messages.map((msg, index) => (
            <li key={index}
            className={msg.username === username ? "message-sent" : "message-received"}>
              <p>{msg.msg}</p>
              <small>{msg.username}</small>
            </li>
          ))}
        </ul>
        <div ref={messagesRef}></div>
      </div>
      <form className="chat" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
