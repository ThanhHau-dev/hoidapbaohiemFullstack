const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

exports.sendEmail = (req, res) => {
  const { data } = req.body;

  // Cấu hình tài khoản Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Nội dung email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "trannguyenthanhhaupro09@gmail.com",  // Gửi đến email của người nhận
    subject: "Thông tin khách hàng để lại từ website của bạn",
    text: `Nội dung: "${data.req}"\nThông tin liên hệ: ${data.infor}\n\nChúc Ánh Hồng một ngày làm việc vui vẻ !`,
};

  // Respon cho FE
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Lỗi gửi email" });
    }
    res.status(200).json({ message: "Email đã được gửi!" });
  });
};