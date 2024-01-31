const express = require("express")
const { getCategories, getCategoryByid } = require('../controllers/user/userCategory')
const { getProductDetails } = require('../controllers/user/product')

const router = express.Router()

router.get('/getcategories', getCategories)
router.get('/getproductdetails', getProductDetails)
router.get('/getcategorybyid', getCategoryByid)


// exports 
module.exports = router