const { DataTypes } = require('sequelize');
const Products = require('./Products');
const User = require('./User');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    return sequelize.define('cart', {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, { timestamps: false, freezeTableName: true })
}