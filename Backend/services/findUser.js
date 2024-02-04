const Userdetails = require('../models/userDetails')


// find user service to find the user from database 
const findUser = (email) => {
    return Userdetails.findOne({ where: { email: email } })
}



module.exports = findUser