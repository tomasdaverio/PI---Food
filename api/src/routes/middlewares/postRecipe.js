const {fnpostRecipe} = require('../methods/methods.js') ;

module.exports = async (req,res) => {

  const {name,summary,hscore,steps,diets} = req.body ;

   try {

    const recipe = await fnpostRecipe(name,summary,hscore,steps,diets) ;
    return res.json(recipe) ;

  } catch (error) {

    return res.send(error.message) ;

  }
}


const testigo = (req,res) =>{

    res.send(`Acá haría un POST de Recipes`)

}


const json = {"name":"ags","summary":"etcetc","hscore":4,"steps":"p","diets":["vegan"]}

// http://localhost:3001/recipes 