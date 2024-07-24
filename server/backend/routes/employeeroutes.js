const express = require('express')
const {RegisterEmployee , GetEmployees} = require("../controllers/empcontroller")


router = express.Router()

router.route('/').post(RegisterEmployee)
router.route('/').get(GetEmployees)


module.exports = router