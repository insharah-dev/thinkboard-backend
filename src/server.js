import dns from 'dns'
dns.setServers(['8.8.8.8', '1.1.1.1'])

import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import path from "path"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000
// const __dirname = path.resolve()

// if (process.env.NODE_ENV !== "production") {
app.use(
    cors({
        origin: "*"

    })
);
// }
app.use(express.json())
app.use(rateLimiter)

// app.use((req, res, next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next()
// })


app.get("/", (req, res) => {
    res.redirect("/api/notes");
});
app.use("/api/notes", notesRoutes)

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")))

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
//     })
// }

connectDB()

    app.listen(PORT, () => {
        console.log("server is running in port:", PORT);
    })




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";

// import notesRoutes from "./routes/notesRoutes.js";
// import { connectDB } from "./config/db.js";
// import rateLimiter from "./middleware/rateLimiter.js";

// dotenv.config();

// const app = express();
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(rateLimiter);

// // ✅ CORS setup (Vercel ke liye adjust)
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://your-frontend-name.vercel.app"],
//     credentials: true,
//   })
// );

// // ✅ API routes
// app.use("/api/notes", notesRoutes);

// // ✅ Serve frontend build (for production)
// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
// });

// // ✅ Connect DB before handling requests
// await connectDB();

// // ❌ app.listen() hata diya (Vercel khud handle karta hai)
// export default app;
