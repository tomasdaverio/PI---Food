const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo (ojo, ver bien el rango de id de recetas de la api para que no haya conflicto.)
  sequelize.define('recipe', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hscore: {
      type: DataTypes.INTEGER,
      validate:{
        isonRange(value) {
          if (value<0 || value>100 ) {
            throw new Error('hscore must be between 0 and 100');
          }
        }
      }
    },
    instructions: {
    type: DataTypes.STRING
    },
  },
  {
    timestamps: false
    }
  );
};



