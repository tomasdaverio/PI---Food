const { fngetRecipebyName , fngetRecipes} = require('../methods/methods.js')

module.exports = async (req,res,next)=>{

    try{
        
    const name = req.query.name ;
   
    if(name === 'undefined' || name === undefined ){
        const recipes = await fngetRecipes() ;
        return res.json(recipes) ;
        
    } else {
        const recipes = await fngetRecipebyName(name) ;
        return res.json(recipes) ;
    }
    

    }  catch (error){

        next(error) ;

    }
    }



















const testigo = (req,res) =>{

    res.send(`Acá haría un get de Recipes by Name ${req.query.name}`)

} ;
