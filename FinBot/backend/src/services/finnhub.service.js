import WebSocket from "ws";
import { broadcastStockData } from "../controllers/finhubController.js";

const FINNHUB_WS_URL = `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`;

let stockWs;

export const connectFinnhub = () => {
  stockWs = new WebSocket(FINNHUB_WS_URL);

  stockWs.on("open", () => {
    console.log("Connected to Finnhub WebSocket");
    stockWs.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
  });

  stockWs.on("message", (data) => {
    const parsed = JSON.parse(data);
    if (parsed.type === "trade") {
      broadcastStockData(parsed); 
    }
  });

  stockWs.on("close", () => {
    console.log("Reconnecting...");
    setTimeout(connectFinnhub, 5000);
  });
};
