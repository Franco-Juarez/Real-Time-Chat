# Aplicación de Chat en Tiempo Real

Bienvenido a la **Aplicación de Chat en Tiempo Real**! Este proyecto es una aplicación web full-stack que permite a los usuarios comunicarse en tiempo real mediante una interfaz de chat. Está compuesto por un backend en **Node.js** y un frontend en **React**, utilizando **Socket.IO** para la comunicación en tiempo real y **Turso** como base de datos para la persistencia de datos.

---

## Características Actuales

- **Mensajería en Tiempo Real**: Envía y recibe mensajes instantáneamente con otros usuarios.
- **Persistencia de Datos**: Los mensajes se almacenan en una base de datos **Turso** para su posterior recuperación.
- **Diseño Responsivo**: Funciona sin problemas tanto en dispositivos de escritorio como móviles.

---

## Futuras Características o Mejoras

Estas son algunas funcionalidades que podrían implementarse en el futuro para mejorar la aplicación:

- **Autenticación de Usuarios**: Sistema seguro de registro e inicio de sesión para usuarios.
- **Creación de Salas**: Permitir a los usuarios crear y unirse a salas de chat para conversaciones grupales.
- **Indicadores de Escritura**: Mostrar cuando otros usuarios están escribiendo un mensaje.
- **Historial de Mensajes**: Ver mensajes anteriores en la sala de chat.

---

## Tecnologías Utilizadas

### Backend (Servidor)
- **Node.js**: Entorno de ejecución para el servidor.
- **Express.js**: Framework web para construir la API.
- **Socket.IO**: Habilita la comunicación bidireccional en tiempo real.
- **Turso**: Base de datos ligera y rápida para almacenar mensajes.
- **dotenv**: Para gestionar variables de entorno.

### Frontend (Cliente)
- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Socket.IO Client**: Conecta con el servidor para actualizaciones en tiempo real.
- **Vite**: Herramienta de construcción para el frontend.

---

## Estructura del Proyecto

```
Real-Time-Chat/
├── client/ # Frontend (React)
│   ├── public/ # Archivos estáticos
│   ├── src/ # Componentes y lógica de React
│   │   ├── components/ # Componentes reutilizables
│   │   ├── App.jsx # Componente principal de la aplicación
│   │   ├── main.jsx # Punto de entrada
│   └── package.json # Dependencias del frontend
│
├── server/ # Backend (Node.js)
│   ├── index.js # Archivo principal del servidor
│   └── middleware # Carpeta con archivo de middleware
|
├── package.json # Dependencias del backend 
├── .gitignore # Archivos ignorados por Git
└── README.md # Documentación del proyecto
```

---

## Instalación y Configuración

### Requisitos Previos
- **Node.js** (v14 o superior)
- **npm** o **yarn**
- **Turso**: Configura una base de datos en [Turso](https://turso.tech/).

### Pasos para Ejecutar el Proyecto

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/Franco-Juarez/Real-Time-Chat.git
   cd Real-Time-Chat
   ```

2. **Configurar el Backend**:

   Instala las dependencias:
   ```bash
   npm install
   ```

   Crea un archivo `.env` y agrega las variables de entorno:
   ```env
   PORT=3000
   TURSO_DB_URL=url_de_tu_base_de_datos_turso
   TURSO_DB_AUTH_TOKEN=tu_token_de_autenticación_de_turso
   ```

   Inicia el servidor:
   ```bash
   npm run server
   ```

3. **Configurar el Frontend**:

   Navega a la carpeta del cliente:
   ```bash
   cd ../client
   ```

   Instala las dependencias:
   ```bash
   npm install
   ```

   Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. **Acceder a la Aplicación**:

   Abre tu navegador y ve a [http://localhost:5173](http://localhost:5173).

---

## Scripts Disponibles

- `npm run server`: Inicia el servidor backend.
- `npm run client`: Inicia el servidor de desarrollo del frontend.
- `npm run dev`: Inicia tanto el servidor backend como el frontend simultáneamente (usando `concurrently`).
- `npm run build`: Compila el frontend para producción.
- `npm test`: No hay pruebas configuradas actualmente.

---

## Dependencias Principales

### Backend
- `express`: Framework para construir la API.
- `socket.io`: Para comunicación en tiempo real.
- `@libsql/client`: Cliente de Turso para interactuar con la base de datos.
- `dotenv`: Gestiona variables de entorno.
- `morgan`: Logger para solicitudes HTTP.

### Frontend
- `react`: Biblioteca para construir la interfaz de usuario.
- `socket.io-client`: Cliente para conectarse al servidor de Socket.IO.
- `vite`: Herramienta de construcción rápida para el frontend.

---

## Licencia

Este proyecto está bajo la licencia ISC.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección.
3. Realiza tus cambios y haz commits.
4. Envía un pull request.

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **GitHub**: [Franco Juárez](https://github.com/Franco-Juarez)
- **Portfolio**: [Franco Juárez](https://portfolio-1gn6.vercel.app/)
- **Linkedin**: [Linkedin](https://www.linkedin.com/in/francojuarez/)
- **Email**: franjuaache@gmail.com <!-- Agrega tu email si está disponible -->

