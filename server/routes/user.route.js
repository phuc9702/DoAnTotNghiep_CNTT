const router = require("express").Router()
const ctrls = require("../controllers/user.controller")
const { verifyToken } = require("../middlewares/verify-token")

router.get('/me', verifyToken, ctrls.getMe)



module.exports = router