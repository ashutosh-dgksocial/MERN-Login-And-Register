const myUser = require("../models/Users");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existing = await myUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ msg: "This email already exists in DB" });
    }
    // Hashing the password
    const bcryptPassword = await bcrypt.hash(password, 10); // this is for hashing the password

    // Creating new user instance
    const newUser = new myUser({
      username: username,
      email: email,
      password: bcryptPassword,
    });

    // Saving the new user
    const savingUser = await newUser.save();

    return res
      .status(201)
      .json({ msg: "User created successfully", data: savingUser });
  } catch (error) {
    console.error("Registration error:", error); // Log detailed error
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const existing = await myUser.findOne({ email });
    if (!existing) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    return res.status(200).json({
      msg: "User logged in successfully",
      user: { username: existing.username, email: existing.email },
    });
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

module.exports = { register, login };
