require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./models/user-model");

const app = express();
app.use(cors(origin = "*", Credentials = true));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Utility to get real client IP
const getClientIp = (req) => {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0] || // if behind proxy
    req.socket.remoteAddress || // fallback
    "Unknown"
  );
};


app.get("/", (req, res) => {
  res.send("Server is running");
});


app.post("/submit", async (req, res) => {
  try {
    const { description, phone } = req.body;

    if (!description && !phone) {
      return res.status(400).json({ message: "Please provide description or phone number." });
    }

    const ipAddress = getClientIp(req);

    const newContact = new Contact({
      description: description || null,
      phone: phone || null,
      ip: ipAddress || null
    });

    await newContact.save();

    res.status(201).json({ message: "Data saved successfully!", data: newContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
