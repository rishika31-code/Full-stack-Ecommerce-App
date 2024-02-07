const { decodeToken, checkPassword } = require("../../functions/helperFunction")
const findUser = require("../../services/findUser")

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers
    try {
        const decodeValues = decodeToken(token)
        if (decodeValues) {
            const { email, password } = decodeValues
            const findedUser = await findUser(email)
            if (findedUser) {
                const checkPwd = await checkPassword(password, findedUser.password)
                if (checkPwd) {
                    req.user = findedUser
                    next()
                }
                else { throw new Error({ message: "LogIn Again " }) }
            }
            else {
                throw new Error({ message: "LogIn Again " })
            }
        }
        else {
            throw new Error({ message: "LogIn Again " })
        }

    } catch (error) {
        res.status(400).send({ message: error })
    }
}



module.exports = authMiddleware