const router = require('express').Router()
const ctrls = require("../controllers/auth.controller")

router.post('/test', ctrls.loginWithGoogle )

module.exports = router