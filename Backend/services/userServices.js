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
    }
}


module.exports = userServices