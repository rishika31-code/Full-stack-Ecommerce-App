const { INTEGER, STRING, JSON } = require('sequelize');
const sequelize = require('../../util/database');

const Product = sequelize.define('Product', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productName: {
        type: STRING,
        allowNull: false,
    },
    imageUrl: {
        type: JSON,
        allowNull: false,
    },
    productDes: {
        type: STRING,
        allowNull: true
    }
});

module.exports = Product;
