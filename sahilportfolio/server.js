require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Load Slack Webhook URL from environment variables
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
