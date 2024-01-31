// Importing models
const MainCategories = require('../models/mainCategories')
const Products = require('../models/products')
const SubCategories = require('../models/subCategories')
const ProductType = require('../models/productType')

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