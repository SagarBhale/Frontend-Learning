const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON data

connectDB(); // Connect to MongoDB

// Register auth routes with the /api/auth prefix
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
