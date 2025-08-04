import { useEffect, useState } from "react";

export default function StockTracker() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/api/stocks/stream");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "trade") {
        setPrice(data.data[0].p);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Apple Stock Price: {price ? `$${price}` : "Loading..."}</h1>
    </div>
  );
}
