const express = require('express')
const {GetUser , RegisterUser , LoginUser , UpdateUser } = require('../controllers/usercontroller')


const router = express.Router()


router.route('/register').post(RegisterUser)
router.route('/login').post(LoginUser)
router.route('/me').get(GetUser )

module.exports = router