const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // user model yolu düz ver

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Burda jwt secret səndə nədirsə onu istifadə et
    const user = await User.findById(decoded.id).select("-password"); // password-suz useri tapırıq

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user; // İndi req.user doludur!
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Token not valid" });
  }
};

module.exports = authMiddleware;
