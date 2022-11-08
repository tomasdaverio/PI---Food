const { fngetRecipebyName } = require('../methods/methods.js')

module.exports = async (req,res)=>{

    try{
    const name = req.query.name.toLowerCase() ;
    const recipes = await fngetRecipebyName(name) ;
    return res.json(recipes) ;

    }  catch (error){

     res.send(error.message) ;

    }
    }



















const testigo = (req,res) =>{

    res.send(`Acá haría un get de Recipes by Name ${req.query.name}`)

} ;
