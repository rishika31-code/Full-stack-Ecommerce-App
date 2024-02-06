const Cart = require("../../models/cart")
const ProductType = require("../../models/productType")

const cartController = {
    addToCart: async (req, res) => {
        const { id } = req.user
        const { quantity, productTypeId } = req.body
        try {

            const dbRes = await Cart.create({ quantity, productTypeId, userId: id })
            const cart = {
                id: dbRes.id,
                productTypeId,
                quantity: quantity
            }
            res.send(cart)

        } catch (error) {
            res.status(200).send({ message: "Error Try Again !" })
        }
    },

    upadateQuantity: async (req, res) => {
        const { quantity, productTypeId } = req.body
        try {
            const dbRes = await Cart.findOne({ where: { productTypeId } })
            await dbRes.update({ quantity: quantity })
            const cart = {
                id: dbRes.id,
                productTypeId,
                quantity: quantity
            }
            res.send(cart)

        } catch (error) {
            res.status(200).send({ message: "Error!" })
        }
    }
}

module.exports = cartController
