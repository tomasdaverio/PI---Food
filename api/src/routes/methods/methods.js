//importaciones para los metodos:

//fngetDiets:
const dietSet = require('../../../../ownresources/dietset.js')
const { Diet } = require('../../db.js')

//fnpostRecipe:
const { Recipe } = require('../../db.js')

module.exports = {
     fngetDiets : async () => {
        //tiene que sacarlas de la tabla Diets de la DB, que tiene que tenerlas previamente asi que las creo:
    
        const dietEntities = dietSet.map(diet => Diet.create({ name: diet })) ;
    
        await Promise.all(dietEntities) ;
    
        //ahora que estan creadas y almacenadas en la DB, las solicito:
    
        const dietsAnswer = Diet.findAll() ;
    
        return dietsAnswer ;
          
    },
    fnpostRecipe : async (name,summary,hscore,steps,diets) => {

        //Chequeo los campos obligatorios (name,summary) - aunque deberia validarse en el front:

        if(!name || !summary) throw new Error({message: 'Recipe cannot be created with lack of name or summary'}) ;

        if(typeof name !== 'string' || typeof summary !== 'string') throw new Error({message: 'typeof name|summary must be string'}) ;

        //Creo la receta con los parametros enviados por el usuario a traves del formulario/front:
    
        const recipe = await Recipe.create({
            name,
            summary,
            hscore: hscore ? hscore : null,
            steps: steps ? steps : null,
        }) 
    
            
        //ahora que esta creada deberia asociarla con los tipos de dieta informados por el usuario (si es que asocio):
        
        if(diets.length){

            const dietInstances = diets.map(async diet => { 
                const [newdiet, created] = await Diet.findOrCreate({where: { name: diet }}) 
                return newdiet ;
            })
            
            Promise.all(dietInstances)
            
            const promises = await dietInstances.map( diet => recipe.setDiets(diet.id))

            

        } 
       
        return await recipe ;
          
    }

}