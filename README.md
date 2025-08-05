# 📂 FinBot - Folder Structure

This project is built using **MERN** for the main backend/frontend and **Flask (Python)** for the ML prediction API.

---

## 📦 Folder Structure
```
finance-bot/
│
├── FinBot/ 
├──FinBot/frontend 
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── PortfolioTable.jsx
│ │ │ ├── StockChart.jsx
│ │ │ ├── ChatbotUI.jsx
│ │ │ ├── AlertsPanel.jsx
│ │ ├── pages/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ ├── services/
│ │ │ ├── api.js # Axios API calls to Node.js backend
│ │ │ ├── websocket.js # WebSocket connection
│ │ ├── utils/
│ │ │ ├── formatCurrency.js
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── package.json
│
├── FinBot/backend/ # Node.js + Express.js backend
│ ├── src/
│ │ ├── config/
│ │ │ ├── db.js # MongoDB connection
│ │ │ ├── env.js # Environment variables
│ │ ├── models/
│ │ │ ├── User.js
│ │ │ ├── Portfolio.js
│ │ │ ├── Alert.js
│ │ ├── routes/
│ │ │ ├── auth.routes.js
│ │ │ ├── portfolio.routes.js
│ │ │ ├── alerts.routes.js
│ │ ├── controllers/
│ │ │ ├── auth.controller.js
│ │ │ ├── portfolio.controller.js
│ │ │ ├── alerts.controller.js
│ │ ├── services/
│ │ │ ├── stockPrice.service.js # Fetch real-time stock prices
│ │ │ ├── alerts.service.js # Check alerts
│ │ │ ├── flaskAPI.service.js # Communicate with Flask API
│ │ ├── websocket/
│ │ │ ├── stockUpdates.js
│ │ ├── utils/
│ │ │ ├── jwt.js
│ │ │ ├── errorHandler.js
│ ├── app.js
│ ├── package.json
│
├── FinBot-Flask/ # Python Flask ML API
│ ├── venv/ # Virtual environment (not pushed to GitHub)
│ ├── app/
│ │ ├── init.py
│ │ ├── routes/
│ │ │ ├── predict.py # Price predictions
│ │ │ ├── sentiment.py # Sentiment analysis
│ │ │ ├── recommend.py # Stock recommendations
│ │ ├── services/
│ │ │ ├── data_fetcher.py # Fetch stock data
│ │ │ ├── predictor.py # ML prediction logic (LSTM/Prophet)
│ │ │ ├── sentiment_analyzer.py
│ │ │ ├── recommender.py
│ │ ├── utils/
│ │ │ ├── preprocess.py
│ │ │ ├── model_loader.py
│ │ ├── app.py
│ ├── requirements.txt
│ ├── .gitignore # Ignore venv and pycache
│
├── README.md

```

---

## 📌 Notes
- Add `venv/` and `__pycache__/` to `.gitignore`.
- Use `.env` files for API keys and sensitive configs.
- Keep **frontend**, **backend**, and **ML API** in separate folders for clean architecture.
