const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController");

// Route render giao diện
router.get("/", (req, res) => {
  res.render("index"); // Render file views/index.ejs
});

// Route rennder trang anhhong
router.get("/anhhong", (req, res) => {
    res.render("anhhong")
})

// Route xử lý gửi email
router.post("/send-email", emailController.sendEmail);

module.exports = router;
