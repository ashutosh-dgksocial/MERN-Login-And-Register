const express = require("express");
const app = express();
const router = express.Router();
const { register, login } = require("../controller/user");
// const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);

// app.get("/profile", auth, (req, res) => {
//   res.status(200).json({
//     msg: "Protected route",
//     user: req.user, // Access user information from the token
//   });
// });

module.exports = router;
