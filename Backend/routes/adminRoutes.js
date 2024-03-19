const { addSubCategory, addCategory, getAllCategories, getAllSubCategories, getSubCategoriesByMainCategory } = require('../controllers/admin/categoryController')
const { addProduct, getAllProduct, addProductType, getAllProductTypes } = require('../controllers/admin/productController')
const { createOffer, getCreatedOffers, getGivenOffers, giveOffer } = require('../controllers/admin/offerController')
const { getAllUsers } = require('../controllers/admin/userController')
const express = require('express')

const router = express.Router()

router.post('/addcategory', addCategory)
router.post('/addsubcategory', addSubCategory)
router.get("/category/getsubcategoriesbycategory", getSubCategoriesByMainCategory)
router.post('/addproduct', addProduct)
router.post('/addproducttype', addProductType)
router.post('/offer/createoffer', createOffer)
router.post('/offer/giveoffer', giveOffer)
router.get('/getallproducts', getAllProduct)
router.get('/getallcategories', getAllCategories)
router.get('/getallsubcategories', getAllSubCategories)
router.get('/getallproducttypes', getAllProductTypes)
router.get('/offer/getcreatedoffers', getCreatedOffers)
router.get('/offer/getgivenoffers', getGivenOffers)
router.get('/getusers', getAllUsers)



// exporting the router object
module.exports = router