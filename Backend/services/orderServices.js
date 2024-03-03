const Order = require('../models/order')
const OrderItem = require('../models/orderItem')
const Transaction = require('../models/transaction')

const orderServices = {
    addTransactionService: async (orderId, amount, userEmail) => {
        try {
            const dbRes = await Transaction.create({ orderId, amount, userEmail })
            return dbRes
        } catch (error) {
            throw error
        }
    },


    updateTransactionService: async (orderId, status, paymentId, transaction) => {
        try {
            const findTransaction = await Transaction.findOne({ where: { orderId } })
            await findTransaction.update({ paymentId, status }, { transaction })
        } catch (error) {
            throw error
        }
    },

    createOrderService: async (totalAmount, discountPercentage, finalAmount, address, userId, transaction) => {
        try {
            const dbRes = Order.create({ totalAmount, discountPercentage, finalAmount, address, userId }, { transaction })
            return dbRes
        } catch (error) {
            throw error
        }
    },

    createOrderItemService: async (orderItems, transaction) => {
        try {
            const dbRes = await OrderItem.bulkCreate(orderItems, { transaction })
            return dbRes
        } catch (error) {
            throw error
        }
    }



}

module.exports = orderServices