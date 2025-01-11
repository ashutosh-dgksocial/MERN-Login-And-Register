const myUser = require("../models/Users");
const bcrypt = require("bcryptjs");

const registration = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await myUser.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Registered" }); // Changed status to 400 for bad request
        }

        // Hashing the password before saving
        const hashPWD = await bcrypt.hash(password, 10);

        const newUser = new myUser({
            name: name,
            email: email,
            password: hashPWD, // Use hashed password
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully", data: newUser });
    } catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body; // Destructure email and password from req.body

    try {
        const user = await myUser.findOne({ email }); // Find user by email
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" }); // User not found
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" }); // Password mismatch
        }

        // Successful login
        res.status(200).json({ message: "You're logged in", user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
};

module.exports = { registration, login };
