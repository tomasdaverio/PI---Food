const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo (ojo, ver bien el rango de id de recetas de la api para que no haya conflicto.)
  sequelize.define('recipe', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hscore: {
      type: DataTypes.INTEGER,
      validate:{
        isonRange(value) {
          if (value<1 || value>100 ) {
            throw new Error('hscore must be between 1 and 100');
          }
        }
      }
    },
    steps: {
    type: DataTypes.STRING
    }
  });
};



