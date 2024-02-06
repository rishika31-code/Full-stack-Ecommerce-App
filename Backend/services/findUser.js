const Cart = require('../models/cart')
const Userdetails = require('../models/userDetails')


// find user service to find the user from database 
const findUser = (email) => {
    return Userdetails.findOne({
        where: { email: email },
        include: [{ model: Cart, attributes: ["id", "quantity", "productTypeId"] }]
    })
}



module.exports = findUser