const Address = require('../../models/address')

const addressController = {
    addAddress: async (req, res) => {
        const { id } = req.user
        const jsonAddress = JSON.stringify(req.body)
        try {
            const dbRes = await Address.create({ address: jsonAddress, userId: id })
            const formattedRes = { id: dbRes.id, address: JSON.parse(dbRes.address) }
            return res.send(formattedRes)

        } catch (error) {
            res.status(400).send({ message: 'Something Went Wrong' })
        }
    },
    getAddresses: async (req, res) => {
        const { id } = req.user
        try {
            const dbRes = await Address.findAll({ where: { userId: id } })
            dbRes.forEach((values) => {
                values.address = JSON.parse(values.address)
            })
            return res.send(dbRes)
        } catch (error) {
            res.status(500).send({ message: 'Something Went Wrong' })
        }
    }
}


module.exports = addressController