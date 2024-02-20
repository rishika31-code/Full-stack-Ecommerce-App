// Importing models
const MainCategories = require('../models/mainCategories')
const Products = require('../models/products')
const SubCategories = require('../models/subCategories')
const ProductType = require('../models/productType')
const Cart = require('../models/cart')
const UserDetails = require('../models/userDetails')
const Address = require('../models/address')
// all association
module.exports = () => {

    MainCategories.hasMany(SubCategories);
    SubCategories.belongsTo(MainCategories);

    MainCategories.hasMany(Products);
    Products.belongsTo(MainCategories);

    SubCategories.hasMany(Products);
    Products.belongsTo(SubCategories);

    Products.hasMany(ProductType);
    ProductType.belongsTo(Products);

    UserDetails.hasMany(Cart)
    Cart.belongsTo(UserDetails)

    ProductType.hasMany(Cart)
    Cart.belongsTo(ProductType)

    UserDetails.hasMany(Address)
    Address.belongsTo(UserDetails)





}