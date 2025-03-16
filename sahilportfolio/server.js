require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// ✅ Allow CORS for your frontend URL
app.use(cors({
  origin: "https://sahilportfolio-lyart.vercel.app", // Ensure HTTPS is used
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// ✅ Fix API Route: Use `/api/send-to-slack`
app.post("/api/send-to-slack", async (req, res) => {
  try {
    const response = await axios.post(SLACK_WEBHOOK_URL, req.body);
    res.status(200).json({ success: true, message: "Message sent to Slack!" });
  } catch (error) {
    console.error("Error sending to Slack:", error.response ? error.response.data : error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Handle other routes to prevent 405 errors
app.all("*", (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
