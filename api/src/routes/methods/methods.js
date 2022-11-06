//importaciones para los metodos:

//fngetDiets:
const dietSet = require('../../../../ownresources/dietset.js')
const { Diet } = require('../../db.js')


module.exports = {
     fngetDiets : async () => {
        //tiene que sacarlas de la tabla Diets de la DB, que tiene que tenerlas previamente asi que las creo:
    
        const dietEntities = dietSet.map(diet => Diet.create({ name: diet })) ;
    
        await Promise.all(dietEntities) ;
    
        //ahora que estan creadas y almacenadas en la DB, las solicito:
    
        const dietsAnswer = Diet.findAll() ;
    
        return dietsAnswer ;
          
    }
}