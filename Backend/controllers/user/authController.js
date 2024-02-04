const Userdetails = require('../../models/userDetails')
const { generateToken, decodeToken, checkPassword } = require('../../functions/helperFunction')
const findUser = require('../../services/findUser')
const bcrypt = require('bcrypt')

const authController = {

    // for user signup
    onUserSignUp: async (req, res) => {
        const { name, email, password } = req.body

        try {
            const findedUser = await findUser(email)
            if (findedUser) {
                res.status(400).send({ message: "User Exist" });
            }

            else {
                const hashPwd = await bcrypt.hash(password, 10) // 10 is salt round 
                const createdUser = await Userdetails.create({ name, email, password: hashPwd })
                if (createdUser) {
                    const token = generateToken(email, password)
                    res.send({ token: token, name, email })
                }
            }
        } catch (error) {
            res.status(400).send({ message: error })
        }
    },

    // for user login
    onUserLogIn: async (req, res) => {
        const { email, password } = req.body
        try {
            const findedUser = await findUser(email)
            if (findedUser) {
                const checkPwd = await checkPassword(password, findedUser.password)
                if (checkPwd) {
                    const token = generateToken(email, password)
                    res.send({
                        token: token,
                        name: findedUser.name,
                        email
                    })
                }
                else { res.status(500).send({ message: "Wrong Password" }) }
            }
            else { res.status(500).send({ message: "User doesn't exist" }) }

        } catch (error) {
            res.status(400).send({ message: error })
        }

    },

    // verify user 
    onVerfiyUser: async (req, res) => {
        const { token } = req.body
        try {
            const decodeValues = decodeToken(token)
            if (decodeValues) {
                const { email, password } = decodeValues
                const findedUser = await findUser(email)

                if (findedUser) {
                    const checkPwd = await checkPassword(password, findedUser.password)
                    if (checkPwd) {
                        res.send({ name: findedUser.name, email })
                    }
                    else { res.status(500).send({ message: "Please LogIn Again" }) }
                }
                else {
                    { res.status(500).send({ message: "Please LogIn Again !" }) }
                }
            }
            else {
                { res.status(500).send({ message: "Please LogIn Again !" }) }
            }

        } catch (error) {
            console.log(error)
            res.status(400).send({ message: error })
        }
    }
}


module.exports = authController