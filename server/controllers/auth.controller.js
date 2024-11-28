const asyncHandler = require('express-async-handler')
const db = require('../models')
const brcypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

// Hàm mã hóa mật khẩu
const hasPassword = password => brcypt.hashSync(password, brcypt.genSaltSync(10));

module.exports = {
    // Đăng nhập với Google
    loginWithGoogle: asyncHandler(async (req, res) => {
        const { email, hoTen, anhDaiDien, matKhau } = req.body; 

        let uid;

        // Kiểm tra xem người dùng đã có trong hệ thống hay chưa
        const aleadyUser = await db.Nguoi_dung.findOne({ where: { email } }); 
        
        if (!aleadyUser) {
            // Nếu chưa có, tạo mới người dùng
            const newUser = await db.Nguoi_dung.create({
                email,
                hoTen,
                anhDaiDien,
                matKhau: hasPassword(matKhau) // Mã hóa mật khẩu
            });

            if (!newUser) throw new Error("Lỗi tạo mới người dùng.");
            uid = newUser.id; // Lưu ID của người dùng mới
        } else {
            uid = aleadyUser.id; // Lấy ID của người dùng đã tồn tại
        }

        // Tạo token JWT cho người dùng
        const token = jwt.sign({ uid }, process.env.SECRET_JWT_KEY, { expiresIn: "7d" });

        // Trả về phản hồi
        return res.json({
            success: !!token,
            accessToken: token,
            msg: token ? "Đăng nhập thành công." : "Đăng nhập không thành công."
        });
    }),

    // Kiểm tra người dùng mới từ email
    checkNewUserFromEmail: asyncHandler(async (req, res) => {
        const { email } = req.params; // Lấy email từ tham số

        // Kiểm tra xem email có tồn tại trong hệ thống không
        const user = await db.Nguoi_dung.findOne({ where: { email } }); // Tìm người dùng theo email

        let token = null;
        if (user) token = jwt.sign({ uid: user.id }, process.env.SECRET_JWT_KEY, { expiresIn: "7d" });

        // Trả về phản hồi
        return res.json({
            success: true,
            hasUser: !!user,
            accessToken: token,
            msg: token ? "Đăng nhập thành công." : "Người dùng mới"
        });
    })
};
