import express from "express";

const router = express.Router();

router.post("/webhook", (req, res) => {
  const finnhubSecret = req.header("X-Finnhub-Signature") || req.header("X-Finnhub-Secret");

  if (finnhubSecret !== process.env.FINNHUB_WEBHOOK_SECRET) {
    return res.status(401).send("Unauthorized");
  }

  console.log("Webhook data received:", req.body);

  res.status(200).send("OK");
});

export default router;
