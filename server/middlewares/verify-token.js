const jsonwebtoken = require("jsonwebtoken");
const db = require('../models');

const verifyToken = (req, res, next) => {
    // Kiểm tra xem header có chứa Bearer token không
    if(req.headers.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(" ")[1]; // Lấy token từ header

        // Xác thực token
        jsonwebtoken.verify(token, process.env.SECRET_JWT_KEY, async (err, user) => {
            if (err) {
                return res.json({
                    success: false,
                    msg: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."
                });
            }

            // Nếu token hợp lệ, tìm người dùng trong cơ sở dữ liệu
            const currentUser = await db.Nguoi_dung.findByPk(user.uid); // Sử dụng bảng Nguoi_dung và tìm người dùng theo UID

            if (!currentUser) {
                return res.json({
                    success: false,
                    msg: "Người dùng không tồn tại trong hệ thống."
                });
            }

            // Nếu người dùng tồn tại, gắn thông tin người dùng vào request và tiếp tục
            req.user = user;
            next();
        });
    } else {
        return res.json({
            success: false,
            msg: "Bạn chưa đăng nhập"
        });
    }
};

module.exports = {
    verifyToken,
};
