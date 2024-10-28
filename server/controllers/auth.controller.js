const asyncHandler = require('express-async-handler')
const db = require('../models')
const brcypt = require('bcryptjs')

const hasPassword = password => brcypt.hashSync(password, brcypt.genSaltSync(10));
module.exports={
    //login with gg
    loginWithGoogle: asyncHandler(async (req, res) => {
        const {email, fullname, avatar, password} = req.body

        const aleadyUser = await db.User.findOne({where: {email}})
        
        if(!aleadyUser) {
            const response =  await db.User.create({email, fullname, avatar,password: hasPassword(password)})
            if(!response) throw new [errror("lỗi tạo mới ")]
        }
        return res.json({
            success:true,
            aleadyUser,
        
        })
    }),
}