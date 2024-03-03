const Razorpay = require('razorpay')
const { getCartProducts } = require('../../services/cartServices')
const { findOfferbyId } = require('../../services/offerServices')
const { createOrderService } = require('../../services/orderServices')

const orderController = {

    createOrder: async (req, res) => {
        const { email, id } = req.user
        const { offerId } = req.body
        try {
            // taking all cart products
            const cartProducts = await getCartProducts(id)

            // calculating total price 
            let totalPrice = cartProducts.reduce((prev, curr) => {
                const productTotal = curr.quantity * curr.price;
                return prev + productTotal + 5;
            }, 0)

            // if user applied some offer
            if (offerId) {
                const appliedOffer = await findOfferbyId(offerId)
                if (appliedOffer) { totalPrice = Math.round(totalPrice - (totalPrice * (appliedOffer.discount / 100))) }
            }
            // razorpay instance
            const amount = totalPrice * 100
            const rzp = new Razorpay({
                key_id: process.env.RZP_KEY_ID,
                key_secret: process.env.RZP_KEY_SECRET
            })
            // creating the order
            rzp.orders.create({ amount: amount, currency: 'INR' }, async (err, order) => {
                try {
                    if (err) {
                        throw new Error(JSON.stringify(err))
                    }
                    await createOrderService(order.id, totalPrice, email)
                    res.send({ order, key_id: process.env.RZP_KEY_ID })

                } catch (error) {
                    res.status(400).send({ message: "error while creating order", error: error })
                }

            })

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = orderController