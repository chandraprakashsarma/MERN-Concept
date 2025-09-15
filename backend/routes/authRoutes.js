const express = require("express");
const { register, login } = require("../controllers/authController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/register", register);
router.post("/login", login);

// Private (only logged-in users)
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Profile Data", user: req.user });
});

// Admin only route
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin! Only admins can see this." });
});

module.exports = router;
