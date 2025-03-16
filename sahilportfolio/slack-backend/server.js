require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Allow CORS for frontend requests
const allowedOrigins = [
  "http://localhost:3000", // For local testing
  "https://sahilportfolio-lyart.vercel.app" // Your deployed frontend URL
];

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

app.use(express.json());

// ✅ Handle preflight (OPTIONS) requests
app.options("/api/send-email", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.send();
});

// ✅ Email Sending Route
app.post("/api/send-email", async (req, res) => {
  const { username, email, message } = req.body;

  if (!username || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required!" });
  }

  // ✅ Configure Nodemailer Transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can use Gmail, Outlook, Yahoo, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your email app password
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email (receiver)
    subject: `New Contact Form Submission from ${username}`,
    text: `Name: ${username}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
