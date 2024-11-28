const asyncHandler = require('express-async-handler')
const db = require('../models') // Đảm bảo rằng bạn đã import đúng mô hình

module.exports = {
    getMe: asyncHandler(async(req, res) => {
        const { uid } = req.user; // Lấy UID từ user trong request (được xác thực trước đó)
        console.log(uid);

        // Truy vấn người dùng từ cơ sở dữ liệu
        const response = await db.Nguoi_dung.findByPk(uid, {
            attributes: {
                exclude: ["matKhau", "maKhoiPhucMatKhau", "hanDungMaDatLaiMatKhau"] // Đảm bảo tên trường là đúng
            }
        });

        // Trả về phản hồi người dùng
        return res.json({
            success: true,
            user: response,
        });
    }),
};
