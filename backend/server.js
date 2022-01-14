import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { TodoRouter } from './routes/Todo.routes.js'
import cors from 'cors'

// CONNECT TO DATABASE
connectDB();

// LOAD ENV VARS
dotenv.config();

// PORT
const PORT = process.env.PORT || 3000;

const server = express();

// CORS ENABLE
server.use(cors())

// PARSE JSON
server.use(express.json());

server.use('/api/v1/todo', TodoRouter)

// VERIFY SERVER ROUTES
server.get('/', (req, res) => {
  res.json({ message: 'You should initialize the requests at /api/<entity>'});
})

// RUN THE SERVER
server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})

