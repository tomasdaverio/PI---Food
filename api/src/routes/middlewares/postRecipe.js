const {fnpostRecipe} = require('../methods/methods.js') ;

module.exports = (req,res)=>{

    res.send(`Acá haría un POST de Recipes`)

}

//esta es la funcion que deberia exportarse en realidad:
const postRecipe = async (req,res) => {

    const {name,summary,hscore,steps,diets} = req.body ;

    try {

      const recipe = await fnpostRecipe(name,summary,hscore,steps,diets) ;
      return res.json(recipe) ;

    } catch (error) {

      return res.send(e.message) ;

    }
}