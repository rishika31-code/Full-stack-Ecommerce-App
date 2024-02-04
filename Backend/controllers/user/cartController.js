const Cart = require("../../models/cart")

const cartController = {
    addToCart: async (req, res) => {
        const { id } = req.user
        const { quantity, productTypeId } = req.body
        try {
            const dbRes = await Cart.create({ quantity, productTypeId, userId: id })
            console.log(dbRes.id)
        } catch (error) {
            res.status(200).send({ message: "Error Try Again !" })
        }
    }
}

module.exports = cartController
