const Transaction = require('../models/transaction')

const orderServices = {
    createOrderService: async (orderId, amount, userEmail) => {
        try {
            const dbRes = await Transaction.create({ orderId, amount, userEmail })
            return dbRes
        } catch (error) {
            throw error
        }
    }
}

module.exports = orderServices