const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { email: user.email, id: user._id }, // payload containing user info
        process.env.JWT_KEY, // secret key used for signing the token
        // { expiresIn: "1h" }  Optional: token expiration time (1 hour)
    );
};

module.exports = { generateToken };
