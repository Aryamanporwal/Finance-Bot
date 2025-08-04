let clients = [];

export const streamStockPrices = (req, res) => {

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");


  clients.push(res);

  req.on("close", () => {
    clients = clients.filter(c => c !== res);
  });
};

export const broadcastStockData = (data) => {
  clients.forEach(client => {
    client.write(`data: ${JSON.stringify(data)}\n\n`);
  });
};