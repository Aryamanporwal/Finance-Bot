import express from "express";
import { streamStockPrices } from "../controllers/finhubController.js";

const router = express.Router();

router.get("/stream", streamStockPrices);

export default router;

