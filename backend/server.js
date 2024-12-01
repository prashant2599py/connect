import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import authRoutes from '../backend/routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/" , (req, res) => {
    res.send("Welcome to post 5000")
})


app.listen(5000, () => {
    connectToMongoDb();
    console.log(`SERVER RUNNING ON ${PORT}` )
});