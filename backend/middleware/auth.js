const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {
    // const token = req.header["authorization"];
    const token = req.cookie.token // Get Token from cookie

    if (!token) return res.status(401).json({ msg: "Access Denied" });

    // if (!token.startsWith("Bearer ")) return res.status(401).json("invalid Token format"); // if we are using headers then we will use this

    // const tokenWithOutBearer = token?.split(" ")[1]; // this one also

    jwt.verify(tokenWithOutBearer, process.env.JWT_SECRET, (err, encoded) => {
        if (err) return res.status(401).json({ msg: "invalid or expired token" })
            
        req.user = encoded;
        next(); // process next routes or mid..war.. handlers
    })
}
module.exports = authenticateJWT;