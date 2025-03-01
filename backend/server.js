const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contactRoute");
require("dotenv").config(); // Load environment variables

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection string (Use environment variable for security)
const mongoURI = process.env.MONGO_URI || "mongodb+srv://janhavikhonde8220:IwHJAQwGYkxaZdlA@cluster0.lwbv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.log("❌ Error connecting to MongoDB:", error));

// Default route (Fixes "Cannot GET /" issue)
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully on Vercel!");
});

// API Routes
app.use("/api/contact", contactRoute);

// Set up the server to listen on port (for local development)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// Export for Vercel
module.exports = app;
