const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {
    const token = req.cookies.token; // Correct way to access the cookie

    if (!token) {
        return res.status(401).json({ msg: "Access Denied" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: "Invalid or expired token" });
        }

        req.user = decoded.user; // Store decoded user data in request
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = authenticateJWT;
