const express = require('express')
const router = express.Router()
const {gitAllProductsStatic, gitAllProducts} = require('../controllers/products')

router.route('/').get(gitAllProducts)
router.route('/static').get(gitAllProductsStatic)

module.exports = router