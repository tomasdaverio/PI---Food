const { fnpostRecipe } = require('../methods/methods.js') ;

module.exports = async (req,res,next) => {

  const {name,summary,hscore,instructions,diets} = req.body ;

   try {

    const recipe = await fnpostRecipe(name,summary,hscore,instructions,diets) ;
    return res.json(recipe) ;

  } catch (e) {

    next(e) ;

  }
}


const json = {"name":"ags","summary":"etcetc","hscore":4,"instructions":"p","diets":["vegan"]}

// http://localhost:3001/recipes 