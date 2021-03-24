const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
const Orders = require("./Orders")
const Users = require("./Users")
const Products = require("./Products")

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/Orders', Orders);
router.use('/Users', Users);
router.use('/Products', Products);

module.exports = router
