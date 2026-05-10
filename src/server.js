import dns from 'dns'
dns.setServers(['8.8.8.8', '1.1.1.1'])

import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config()

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
app.use(express.json())

app.use(
    cors('*')
);
app.use(rateLimiter)

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/notes", notesRoutes)


connectDB()

app.listen(process.env.PORT, () => {
    console.log("server is running in port:", process.env.PORT);
})
