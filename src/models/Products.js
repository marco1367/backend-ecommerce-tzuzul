const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('products', {
    id_product:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.REAL,
        allowNull: false,
    }
  }, { timestamps: false })
}
