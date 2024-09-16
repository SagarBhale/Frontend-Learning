const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Get user details route (requires authentication)
router.get("/me", authMiddleware, getUser);

module.exports = router;
