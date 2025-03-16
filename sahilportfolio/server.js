require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Enable CORS for frontend requests
const allowedOrigins = ["https://sahilportfolio-lyart.vercel.app", "http://localhost:3000"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Handle preflight requests
app.options("/api/send-to-slack", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send();
});

app.use(express.json());

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// Slack API Route
app.post("/send-to-slack", async (req, res) => {
  try {
    const response = await axios.post(SLACK_WEBHOOK_URL, req.body);
    res.status(200).json({ success: true, message: "Message sent to Slack!" });
  } catch (error) {
    console.error("Error sending to Slack:", error.response ? error.response.data : error);
    res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
