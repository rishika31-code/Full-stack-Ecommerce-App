const Cart = require("../models/cart")


const findCart = (userId, productTypeId) => {
    return Cart.findOne({ where: { userId: userId, productTypeId: productTypeId } })
}


module.exports = findCart