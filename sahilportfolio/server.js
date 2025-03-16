require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// 🔥 Allow requests only from your deployed frontend URL
app.use(cors({
  origin: "https://sahilportfolio.vercel.app", // Change this to your frontend domain
  methods: "POST",
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// 📩 Slack API Route
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
