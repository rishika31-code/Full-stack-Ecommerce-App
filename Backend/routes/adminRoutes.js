const { addSubCategory, addCategory, getAllCategories } = require('../controllers/admin/categoryControllers')
const { addProduct, getAllProduct } = require('../controllers/admin/productController')
const express = require('express')

const router = express.Router()

router.post('/addsubcategory', addSubCategory)
router.post('/addcategory', addCategory)
router.post('/addproduct', addProduct)
router.get('/getallproducts', getAllProduct)
router.get('/getallcategories', getAllCategories)

// exporting the router object
module.exports = router