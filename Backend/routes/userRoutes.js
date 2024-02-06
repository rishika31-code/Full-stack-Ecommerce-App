const express = require("express")
const { getCategories, getCategoryByid } = require('../controllers/user/userCategory')
const { getProductDetails, getProductBySubCategory } = require('../controllers/user/product')
const { onUserSignUp, onUserLogIn, onVerfiyUser } = require('../controllers/user/authController')
const { addToCart, upadateQuantity } = require("../controllers/user/cartController")
const authMiddleware = require("../middlewares/user/authMiddleware")

const router = express.Router()

// category routes 
router.get('/getcategories', getCategories)
router.get('/getproductdetails', getProductDetails)
router.get('/getproductbysubid', getProductBySubCategory)
router.get('/getcategorybyid', getCategoryByid)

// login routes 
router.post('/signup', onUserSignUp)
router.post('/login', onUserLogIn)
router.post('/verifyuser', onVerfiyUser)

// cart routes 
router.post('/addtocart', authMiddleware, addToCart)
router.post('/updatequantity', authMiddleware, upadateQuantity)


// exports 
module.exports = router