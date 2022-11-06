
const { Recipe , Diet } = require('../../db.js') ; 

//esta funcion es la que se exporta (en lugar de la que está en el module.exports)
const toexport = async (req,res)=>{
    const {name} = req.query ;
    try{
        var recipesDB =  Recipe.findAll({where:{name: {[Op.substring]: name}}}) ;
    } catch(e){
        console.log(e)
    }
    try{
    
     if(recipesDB) {
        const recipesApi = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a&addRecipeInformation=true&number=100')
        const arrayAdaptado = recipesApi.results.map(recipe => {return {
            image: recipe.image,
            name: recipe.title,
            diets: [...new Set([...recipe.diets,recipe.vegetarian ? 'vegetarian' : null,recipe.vegan ? 'vegan' : null,recipe.glutenFree ? 'gluten free' : null ].filter( a => a !== null))]
        }
        })
        const recipesArray = [recipesDB,arrayAdaptado] ;
        await Promise.all(recipesArray) ;
        return res.json(recipesArray.flat()) ;
    } else {
       const recipesApi = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a&addRecipeInformation=true&number=100')
       
    }
    } catch (error){
     res.send('No existen coincidencias con la palabra solicitada')
    }
    }

module.exports = (req,res)=>{

    res.send(`Acá haría un get de Recipes by Name ${req.query.name}`)

} ;
