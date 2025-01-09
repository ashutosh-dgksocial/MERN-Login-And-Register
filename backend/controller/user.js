const User = require("../models/Users");

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ msg: "bad request please add email password" });
    }
    let foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
        const isMatch = foundUser.comparePassword(password);
        if (isMatch) {
            const token = jwt.sign(
                { id: foundUser._id, name: foundUser.name },
                process.env.JWT_SECRET,
                { expiresIn: "30d " }
            );
            return res.status(200).json({ msg: "user Logged in", token });
        } else {

            return res.status(400).json({ msg: "Bad password", token });
        }
    } else {
        return res.status(400).json({ msg: "Bad credentails" });
    }

};

// const dashboard = async () => {};

// const getAllUsers = async () => {};

// const register = async () => {};
