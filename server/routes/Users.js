const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições - ENDPOINTS
router.get("/", UsersController.getAllUsers)

module.exports = router