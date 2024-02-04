const express = require("express")
const { getCategories, getCategoryByid } = require('../controllers/user/userCategory')
const { getProductDetails, getProductBySubCategory } = require('../controllers/user/product')
const { onUserSignUp, onUserLogIn, onVerfiyUser } = require('../controllers/user/authController')

const router = express.Router()

router.get('/getcategories', getCategories)
router.get('/getproductdetails', getProductDetails)
router.get('/getproductbysubid', getProductBySubCategory)
router.get('/getcategorybyid', getCategoryByid)

// login routes 
router.post('/signup', onUserSignUp)
router.post('/login', onUserLogIn)
router.post('/verifyuser', onVerfiyUser)

// exports 
module.exports = router