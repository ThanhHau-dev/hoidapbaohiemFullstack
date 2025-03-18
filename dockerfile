# Cài platform node.js
FROM node:18.19.1

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy trình quản lý các gói vô container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ code vô container
COPY . .

# Expose cổng chạy ứng dụng
EXPOSE 5001

# Lệnh start để chạy
CMD ["node", "server.js"]
