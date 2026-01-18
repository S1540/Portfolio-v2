const express = require("express");
const router = express.Router();
const Login = require("../models/loginSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/secure-login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Login.findOne({ email: email });
    if (!admin) {
      res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    } else {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        });

        return res.status(200).json({
          success: true,
          message: "Login successful",
          token: token,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// check auth via cookies
router.get("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ authenticated: false });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ authenticated: true, admin: decoded });
  } catch (error) {
    res.json({ authenticated: false });
  }
});

module.exports = router;
