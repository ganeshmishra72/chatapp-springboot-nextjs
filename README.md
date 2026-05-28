# 💬 ChatApp - Real Time Chat Application

A modern real-time chat application built using **Spring Boot**, **Next.js**, **WebSocket**, **STOMP**, **MongoDB**, and modern frontend state management tools like **Zustand** and **React Query**.

This project enables users to create chat rooms, join rooms instantly, and communicate in real-time with a beautiful and responsive UI.

---

# 🚀 Tech Stack

## Frontend
- Next.js 15
- React.js
- TypeScript
- Tailwind CSS
- Zustand
- React Query
- Framer Motion
- SockJS
- STOMP.js
- Axios
- React Hot Toast

## Backend
- Spring Boot
- Spring WebSocket
- STOMP Protocol
- MongoDB
- Maven
- Lombok
- Docker

---

# ✨ Features

- 🔥 Real-time messaging
- 🏠 Create and join chat rooms
- ⚡ Instant message delivery using WebSocket
- 📦 Persistent chat storage using MongoDB
- 🎨 Modern responsive UI
- 🚀 Optimized frontend state management
- 🔔 Toast notifications
- 📱 Mobile responsive design
- 🐳 Docker support
- 🌐 REST API + WebSocket integration

---

# 📂 Project Structure

```bash
ChatApp/
│
├── backend-chat/       # Spring Boot Backend
│
├── frontend-chat/      # Next.js Frontend
│
└── README.md
```
--- 
🖼️ Application Preview
Home Page

Create Room

Join Existing Room

Chat Room

Real-time messaging

Live updates

Timestamp support

---

⚙️ 
Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/your-username/chatapp.git

cd chatapp

---

2️⃣ Backend Setup

cd backend-chat

Install dependencies and run server:

./mvnw spring-boot:run

Backend runs on:

http://localhost:8080

---

3️⃣ Frontend Setup

cd frontend-chat

Install packages:

npm install

Run frontend:

npm run dev

Frontend runs on:

http://localhost:3000

---
🔌 WebSocket Endpoint

/chat

---

📡 API Endpoints

Method	Endpoint	Description

POST	/api/v1/rooms	Create Room

GET	/api/v1/rooms/{roomId}	Join/Get Room

POST	/api/v1/messages	Send Message

---

🧠 State Management

Zustand

Used for:

Room state

User data

Global chat states

React Query

Used for:

API handling

Server state caching

Mutations

Async data fetching

---

🛠️ Environment Variables

Frontend .env.local

NEXT_PUBLIC_BASE_URL=http://localhost:8080

Backend application.properties

spring.data.mongodb.uri=YOUR_MONGODB_URI

---

🐳 Docker Support

Backend Docker Build

docker build -t your-dockerhub-username/backend-chat:v1 .

Push Docker Image

docker push your-dockerhub-username/backend-chat:v1

---

🚀 Future Improvements

File sharing

Typing indicator

Online users

Authentication & Authorization

Private messaging

Emoji support

Voice & Video calling

---

<img width="1154" height="864" alt="image" src="https://github.com/user-attachments/assets/e146f063-c128-417b-a03e-3b9d61d88d77" />

<img width="1826" height="911" alt="image" src="https://github.com/user-attachments/assets/f08d77dc-036d-4c1a-9b84-f61cf19c7dfb" />



---
👨‍💻 Author

Ganesh Mishra

Full Stack Developer

Java + Spring Boot Developer

Next.js Enthusiast

---

⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork the project

🐛 Report issues

🚀 Contribute improvements
