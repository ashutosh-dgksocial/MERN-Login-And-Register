const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/user"); // Import the 

router.post("/register", register);
router.post("/login", login);

module.exports = router; // Export the router