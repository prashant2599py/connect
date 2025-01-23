import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import authRoutes from './routes/auth.routes.js'
import messageRoutes from '../backend/routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/" , (req, res) => {
    res.send("Welcome to post 5050")
})


server.listen(5050, () => {
    connectToMongoDb();
    console.log(`SERVER RUNNING ON ${PORT}` )
});