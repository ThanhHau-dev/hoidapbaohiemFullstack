
require("dotenv").config();

module.exports = {
  host: "smtp.example.com", // Cấu hình SMTP của bạn
  port: 587,
  auth: {
    user: process.env.EMAIL_USER, // Email gửi đi
    pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng
  },
};