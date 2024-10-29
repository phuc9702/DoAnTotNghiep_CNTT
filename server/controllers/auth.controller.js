const asyncHandler = require('express-async-handler')
const db = require('../models')
const brcypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
        
        })
    }),
}