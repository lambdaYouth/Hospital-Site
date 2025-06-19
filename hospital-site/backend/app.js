import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./DB/connection.js";
import './routes/index.js'
config();

const app = express();
connectDB()
    .then(() => {
       app.listen(process.env.PORT, () => {
       console.log("Hello world");
      })}
    )
    .catch((error) => {
        console.log("Error");
    })

