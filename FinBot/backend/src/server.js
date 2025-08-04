import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import flaskRoutes from './routes/flaskRoutes.js';
import finnhubRoutes from './routes/finnhubRoutes.js'
import { connectFinnhub } from "./services/finnhub.service.js";
import finnhubWebhooks from "./routes/finnhubWebhooks.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/users", userRoutes);
app.use('/api/flask', flaskRoutes);
app.use("/api/stocks" , finnhubRoutes);
app.use("/api/finnhub", finnhubWebhooks);
connectFinnhub();


app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);