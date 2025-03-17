const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/emailController"); // Import từ controller

router.post("/send-email", sendEmail); // Định nghĩa route gửi email

module.exports = router;
