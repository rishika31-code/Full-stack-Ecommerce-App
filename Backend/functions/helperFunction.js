const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

// helper function to encode email,password 

const generateToken = (email, password) => {
    return jwt.sign({ email, password }, process.env.JWT_SECRET)
}

// helper function to decode the jwt token
const decodeToken = (token) => {
    const verifiedData = jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return null
        } else {
            return decoded;
        }
    });

    return verifiedData;
};


// helper function to verify user password 
const checkPassword = (password, encodedValue) => {
    return bcrypt.compare(password, encodedValue)
}



// exporting 
module.exports = { generateToken, decodeToken, checkPassword }
