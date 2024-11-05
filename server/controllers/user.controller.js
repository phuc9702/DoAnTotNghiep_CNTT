const asyncHandler = require('express-async-handler')
const db = require('../models')


module.exports = {
    getMe: asyncHandler((req, res) => {
        const {uid} = req.user
        //express:req.prams --> để lấy params abc/:id
        //req.body --> post / put pacth data / formData
        //req.quert --> get / delete params

        
    })
}