const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PWD, {
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    logging: false,
    dialectOptions: process.env.DB_SSL_OPTIONS
})




module.exports = sequelize