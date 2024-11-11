const asyncHandler = require('express-async-handler')
const db = require('../models')


module.exports = {
    getMe: asyncHandler(async(req, res) => {
        const {uid} = req.user
        console.log(uid)
        //express:req.prams --> để lấy params abc/:id
        //req.body --> post / put pacth data / formData
        //req.quert --> get / delete params

        const response = await db.User.findByPk(uid, {
           attributes: {
            exclude: ["password", "resetPwExpiry", "resetPwToken"]
           }
        })

        return res.json({
            success: true,
            user: response,
        })        
    }),
}