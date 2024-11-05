const asyncHandler = require('express-async-handler')
const db = require('../models')
const brcypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

const hasPassword = password => brcypt.hashSync(password, brcypt.genSaltSync(10));
module.exports={
    //login with gg
    loginWithGoogle: asyncHandler(async (req, res) => {
        const {email, fullname, avatar, password} = req.body

        let uid

        const aleadyUser = await db.User.findOne({where: {email}})
        
        if(!aleadyUser) {
            const newUser =  await db.User.create({email, fullname, avatar,password: hasPassword(password)})
            if(!newUser) throw new Error("lỗi tạo mới. ")
                uid = newUser.id
        }
        uid = aleadyUser.id

        const token = jwt.sign({uid}, process.env.SECRET_JWT_KEY, {expiresIn:"7d"})

        return res.json({
            success:!!token,
            accessToken: token,
            msg: token ? "Đăng nhập thành công." : "Đăng nhập không thành công."
        
        })
    }),

    


    checkNewUserFromEmail: asyncHandler(async(req,res) => {
        const  {email} = req.params // lay email

        const user = await db.User.findOne({where:{email}})//kiem tra email
        let token = null
        if(user) token = jwt.sign({uid:user.id}, process.env.SECRET_JWT_KEY, {expiresIn:"7d"})

        return res.json({
            success: true,
            hasUser: !!user,
            accessToken: token,
            msg: token ? "Đăng nhập thành công." : "New users",
        })
    })
}