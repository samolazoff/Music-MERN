import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import authRoute from './routes/auth.js';

const app = express();

dotenv.config();
const PORT=process.env.PORT || 5000;
const DB_USER=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASSWORD;
const DB_NAME=process.env.DB_NAME;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

async function start(){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@mymusic.9xonrrl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
        app.listen(PORT, () => {
            console.log(`Server is running port: ${PORT} `);
        })
    } catch (error) {
        console.log(error);
    }
};

start();