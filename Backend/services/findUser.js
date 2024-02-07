const Cart = require('../models/cart')
const ProductType = require('../models/productType')
const Userdetails = require('../models/userDetails')


// find user service to find the user from database 
const findUser = (email) => {
    return Userdetails.findOne({
        where: { email: email },
        include: [
            {
                model: Cart, attributes: ["id", "quantity", "productTypeId"],
                include: [
                    { model: ProductType, attributes: ['price'] }
                ]
            },


        ]
    })
}



module.exports = findUser