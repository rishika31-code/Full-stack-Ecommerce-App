const { addSubCategory, addCategory, getAllCategories, getAllSubCategories } = require('../controllers/admin/categoryControllers')
const { addProduct, getAllProduct } = require('../controllers/admin/productController')
const express = require('express')

const router = express.Router()

router.post('/addcategory', addCategory)
router.post('/addsubcategory', addSubCategory)
router.post('/addproduct', addProduct)
router.get('/getallproducts', getAllProduct)
router.get('/getallcategories', getAllCategories)
router.get('/getallsubcategories', getAllSubCategories)

// exporting the router object
module.exports = router