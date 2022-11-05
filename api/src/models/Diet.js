const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

  });
};

//real diets found:
/*
["gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan",
"dairy free",
"lacto ovo vegetarian",
"vegan",
"lacto ovo vegetarian",
"gluten free",
"dairy free",
"paleolithic",
"lacto ovo vegetarian",
"primal",
"whole 30",
"vegan",
"gluten free",
"dairy free",
"gluten free",
"dairy free",
"paleolithic",
"primal",
"whole 30",
"gluten free",
"dairy free",
"paleolithic",
"primal",
"whole 30",
"gluten free",
"dairy free",
"lacto ovo vegetarian",
"vegan",
"lacto ovo vegetarian",
"vegan",
"gluten free",
"dairy free"]


*/