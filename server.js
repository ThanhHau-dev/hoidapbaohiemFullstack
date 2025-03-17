const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

// Khởi tạo Express
const app = express();
dotenv.config();

// Cấu hình body-parser để đọc dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cấu hình thư mục views 
app.set("view engine", "ejs");

// Import routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// Cấu hình thư mục public là file tĩnh
app.use(express.static(path.join(__dirname, "public")));


// Cho phép server nhận JSON
app.use(express.json());

// Cho phép CORS để nhận request từ FE
app.use(cors());

// Import route email
const emailRoutes = require("./routes/emailRoutes");
app.use("/api", emailRoutes); // Mọi route bắt đầu bằng /api

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
