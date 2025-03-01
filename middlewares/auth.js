const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    console.log("hello");
    console.log("Cookies:", req.cookies); // Log all cookies
    console.log("Body:", req.body); // Log full body
    console.log("Headers:", req.headers); // Log full headers

    const authHeader = req.headers["authorization"]; // Correct header extraction
    console.log("Authorization Header:", authHeader);

    const token =
      req.body.token ||
      req.cookies.token ||
      (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null); // Correct token extraction

    console.log("Extracted Token:", token);

    if (!token || token === "null") {
      return res.status(401).json({ message: "Please authenticate" });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload; // Attach user data
    } catch (error) {
      return res.status(401).json({ message: "Invalid Token, Please authenticate" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication error" });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(403).send("Unauthorized");
    }
    next();
  } catch (error) {
    res.status(403).send("Unauthorized");
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "This is a protected route for Admins, you cannot access it",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Role is not Matching",
    });
  }
};
