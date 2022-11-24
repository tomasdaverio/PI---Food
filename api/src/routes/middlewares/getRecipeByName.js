const { fngetRecipebyName , fngetRecipes} = require('../methods/methods.js')

module.exports = async (req,res)=>{

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

        if(error.message === 'Name Error'){
            res.status(400).json({ error: error.message , status:400 }) ;
       } else {
            res.status(503).json({ error: 'Sorry. We have problems with the server.Please, try again later' , status:503 }) ;
       }
    }
    }



















const testigo = (req,res) =>{

    res.send(`Acá haría un get de Recipes by Name ${req.query.name}`)

} ;
