const Cart = require("../../models/cart")
const ProductType = require("../../models/productType")
const findCart = require("../../services/findCart")
const Products = require('../../models/products')
const cartController = {

    // add to cart
    addToCart: async (req, res) => {
        const { id } = req.user
        const { quantity, productTypeId } = req.body
        try {

            const dbRes = await Cart.create({ quantity, productTypeId, userId: id })
            const { price } = await ProductType.findOne({ where: { id: productTypeId }, attributes: ["price"] })
            const cart = {
                id: dbRes.id,
                productTypeId,
                productType: { price: price },
                quantity: quantity
            }
            res.send(cart)

        } catch (error) {
            console.log(error)
            res.status(400).send({ message: "Error Try Again !" })
        }
    },

    // increase qunatity on specific product
    increaseQuantity: async (req, res) => {
        const { quantity, productTypeId } = req.body
        const { id } = req.user
        try {

            const dbRes = await findCart(id, productTypeId)
            await dbRes.update({ quantity: quantity })
            const cart = {
                id: dbRes.id,
                productTypeId,
                quantity: quantity
            }
            res.send(cart)

        } catch (error) {
            res.status(400).send({ message: "Error!" })
        }
    },

    // decrease quantity on specific product
    deceraseQuantity: async (req, res) => {
        const { quantity, productTypeId } = req.body
        const { id } = req.user
        try {
            const dbRes = await findCart(id, productTypeId)
            if (quantity >= 1) {
                await dbRes.update({ quantity: quantity })
                const cart = {
                    id: dbRes.id,
                    productTypeId,
                    quantity: quantity
                }
                res.send(cart)
            }
            else {
                await dbRes.destroy()
                res.send({ quantity: 0 })
            }

        } catch (error) {
            res.status(400).send({ message: "Error!" })
        }
    },
    getCart: async (req, res) => {
        const { id } = req.user
        try {
            const dbRes = await Cart.findAll({
                where: { userId: id },
                include: [
                    {
                        model: ProductType,
                        include: [{ model: Products }]
                    }
                ]
            });
            res.send(dbRes);
        } catch (error) {
            console.log(error)
            res.status(400).send({ message: "Error!" })
        }
    }

}

module.exports = cartController
