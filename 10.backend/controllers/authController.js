const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const user = new User({
            name,
            email,
            password, // Make sure to hash the password before saving
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error.message);  // Log the error in the server logs
        res.status(500).json({ message: "Server error" });
    }
};

    
    // Login user
    exports.loginUser = async (req, res) => {
        const { email, password } = req.body;
    
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
    
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
    
            const payload = {
                user: {
                    id: user._id,
                },
            };
    
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
    
            res.status(200).json({
                token,
                user: { username: user.username, email: user.email },
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    };
    
    // Get user details
    exports.getUser = async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select("-password");
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    };
    