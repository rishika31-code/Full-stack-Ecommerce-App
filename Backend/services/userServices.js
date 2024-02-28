const UserDetails = require('../models/userDetails')

const userServices = {
    // get users service to find all the users from db
    getUsers: async () => {
        try {
            const dbRes = await UserDetails.findAll()
            return dbRes

        } catch (error) {
            throw error
        }
    },
    // find user email to find specific user by their email id
    findUserByEmailService: async (email) => {
        try {
            const dbRes = await UserDetails.findOne({ where: { email: email } })
            return dbRes
        } catch (error) {
            throw error
        }
    }
}


module.exports = userServices