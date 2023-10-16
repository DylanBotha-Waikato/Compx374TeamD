// Import Modules
require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * Verifies a JSON Web Token (JWT) from the user's request.
 * @param {object} req - Express.js request object.
 * @param {object} res - Express.js response object.
 * @param {function} next - Express.js middleware next function.
 * @returns {void} - Proceeds to the next middleware if the token is valid.
 */
const verifyToken = (req, res, next) => {
  // Get token from request
  const token = req.body.token || req.query.token || req.headers["token"];

  // Check if token is given in header / body / query
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  // Decode and check if JWT is valid
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
