const { fngetRecipebyName } = require('../methods/methods.js')

module.exports = async (req,res)=>{

    const {name} = req.query ;

    try{

    const recipes = await fngetRecipebyName(name) ;
    return res.json(recipes) ;

    }  catch (error){

     res.send(error.message) ;

    }
    }



















const testigo = (req,res) =>{

    res.send(`Acá haría un get de Recipes by Name ${req.query.name}`)

} ;
