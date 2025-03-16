require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Enable CORS for all routes
app.use(cors());

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
    console.log("Slack Webhook URL:", process.env.SLACK_WEBHOOK_URL);

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
