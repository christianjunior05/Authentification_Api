const express = require('express')
const router = express.Router()

const controller = require('../controller/delivery.controller')

router.post('/sign_up' , controller.sign_up)

module.exports = router