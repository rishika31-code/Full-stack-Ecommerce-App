// Importing models
const MainCategories = require('../models/admin/mainCategories')
const Products = require('../models/admin/products')
const SubCategories = require('../models/admin/subCategories')
const ProductType = require('../models/admin/productType')

module.exports = () => {

    MainCategories.hasMany(SubCategories);
    SubCategories.belongsTo(MainCategories);

    MainCategories.hasMany(Products);
    Products.belongsTo(MainCategories);

    SubCategories.hasMany(Products);
    Products.belongsTo(SubCategories);

    Products.hasMany(ProductType);
    ProductType.belongsTo(Products);


}