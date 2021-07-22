const jwt = require("jsonwebtoken");
const config = require("../config");

async function verifyToken(req, res, next) {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: "No token provided",
      });
    }
    const decoded = await jwt.verify(token, config.SK);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(301).redirect("/api/login");
  }
}

module.exports = verifyToken;
