const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const corsOptions = {
  origin: "https://portfolio-rsow.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to send visitor info
app.post("/send-visitor-info", async (req, res) => {
  const {
    ipAddress,
    userAgent,
    platform,
    language,
    screenWidth,
    screenHeight,
    availScreenWidth,
    availScreenHeight,
    colorDepth,
    pixelRatio,
    timezone,
    doNotTrack,
    cookieEnabled,
    online,
    referrer,
    connectionType,
    localStorage,
    sessionStorage,
    batteryLevel,
    batteryCharging,
    webGLVendor,
    webGLRenderer,
    loadTime,
    domReadyTime,
    timestamp,
  } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_FROM, // Change this to your email where you want to receive the info
    subject: `New Visitor Alert - ${timestamp}`,
    html: `
      <h2>New Visitor Details</h2>
      <h3>Basic Information</h3>
      <p><strong>IP Address:</strong> ${ipAddress}</p>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
      <p><strong>Referrer:</strong> ${referrer || "Direct"}</p>
      
      <h3>Device & Browser</h3>
      <p><strong>User Agent:</strong> ${userAgent}</p>
      <p><strong>Platform:</strong> ${platform}</p>
      <p><strong>Language:</strong> ${language}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
      
      <h3>Screen & Display</h3>
      <p><strong>Screen Resolution:</strong> ${screenWidth}x${screenHeight}</p>
      <p><strong>Available Screen:</strong> ${availScreenWidth}x${availScreenHeight}</p>
      <p><strong>Color Depth:</strong> ${colorDepth}-bit</p>
      <p><strong>Pixel Ratio:</strong> ${pixelRatio}</p>
      
      <h3>Browser Features</h3>
      <p><strong>Do Not Track:</strong> ${doNotTrack}</p>
      <p><strong>Cookies Enabled:</strong> ${cookieEnabled}</p>
      <p><strong>Online Status:</strong> ${online}</p>
      <p><strong>Connection Type:</strong> ${connectionType}</p>
      <p><strong>Local Storage:</strong> ${localStorage}</p>
      <p><strong>Session Storage:</strong> ${sessionStorage}</p>
      
      <h3>Hardware & Performance</h3>
      <p><strong>Battery Level:</strong> ${batteryLevel}</p>
      <p><strong>Battery Charging:</strong> ${batteryCharging}</p>
      <p><strong>WebGL Vendor:</strong> ${webGLVendor}</p>
      <p><strong>WebGL Renderer:</strong> ${webGLRenderer}</p>
      <p><strong>Page Load Time:</strong> ${loadTime}ms</p>
      <p><strong>DOM Ready Time:</strong> ${domReadyTime}ms</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
