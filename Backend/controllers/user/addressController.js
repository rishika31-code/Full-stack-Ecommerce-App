const Address = require('../../models/address')

const addressController = {
    addAddress: async (req, res) => {
        const { id } = req.user
        console.log(id)
        const jsonAddress = JSON.stringify(req.body)
        try {
            const dbRes = await Address.create({ address: jsonAddress, userId: id })
            const formattedRes = { id: dbRes.id, address: JSON.parse(dbRes.address) }
            return res.send(formattedRes)

        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = addressController