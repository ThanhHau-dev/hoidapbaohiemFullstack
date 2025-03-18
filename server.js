const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const app = express();
dotenv.config();

// Cho phép CORS để nhận request từ FE
app.use(cors());

// Middleware đọc dữ liệu JSON và form
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cấu hình thư mục views 
app.set("view engine", "ejs");

// Cấu hình thư mục public là file tĩnh
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

const emailRoutes = require("./routes/emailRoutes");
app.use("/api", emailRoutes); // Tất cả API đặt dưới /api

// Chạy server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
