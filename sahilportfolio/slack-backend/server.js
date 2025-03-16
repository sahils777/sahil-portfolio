require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Enable CORS for all routes
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
app.options("/send-to-slack", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send();
});

// Parse JSON request bodies
app.use(express.json());

// Slack Webhook URL (from Step 1)
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

// Route to handle Slack messages
app.post("/send-to-slack", async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Validate input
    if (!username || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required!" });
    }

    // Log the incoming request
    console.log("Received request:", { username, email, message });

    // Send message to Slack
    const slackMessage = {
      text: `📩 *New Contact Form Submission* 📩\n\n*Name:* ${username}\n*Email:* ${email}\n*Message:* ${message}`,
    };

    console.log("Sending to Slack:", slackMessage);

    const response = await axios.post(SLACK_WEBHOOK_URL, slackMessage);

    // Log the Slack API response
    console.log("Slack API Response:", response.data);

    // Respond to the client
    res.status(200).json({ success: true, message: "Message sent to Slack!" });
  } catch (error) {
    console.error("Error sending to Slack:", error.response ? error.response.data : error);
    res.status(500).json({ success: false, error: error.response ? error.response.data : error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
