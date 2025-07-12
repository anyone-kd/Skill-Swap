const express = require("express");
const router = express.Router();

// Import controller functions
const {
  register
} = require("../authcontroller"); // Adjust path if needed




// Public Routes
router.post("/register", register);


// Example of a protected route (optional)
// router.get("/me", authenticate, getMyProfile);

module.exports = router;
