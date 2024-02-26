const sequelize = require("../util/database");
const { INTEGER, STRING } = require('sequelize')

const CreatedOffers = sequelize.define('createdoffers', {
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    offerName: { type: STRING, allowNull: false },
    minValue: { type: INTEGER, allowNull: false },
    discount: { type: INTEGER, allowNull: false },
})



module.exports = CreatedOffers