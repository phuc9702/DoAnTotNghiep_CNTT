const asyncHandler = require('express-async-handler')
const db = require('../models') 

module.exports = {
    getMe: asyncHandler(async(req, res) => {
        const { uid } = req.user; 
        const response = await db.Nguoi_dung.findByPk(uid, {
            attributes: {
                exclude: ["matKhau", "maKhoiPhucMatKhau", "hanDungMaDatLaiMatKhau"] 
            },
            include:[
                {
                    model: db.Gia, as:'rGia',attributes:{exclude:['createdAt','updatedAt']}
                }
            ]
        });
        
        
        return res.json({
            success: true,
            user: response,
        });
    }),
};
