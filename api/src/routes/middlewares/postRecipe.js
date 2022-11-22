const { fnpostRecipe } = require('../methods/methods.js') ;

module.exports = async (req,res,next) => {

  const {name,summary,hscore,instructions,diets} = req.body ;

   try {

    const recipe = await fnpostRecipe(name,summary,hscore,instructions,diets) ;
    return res.json(recipe) ;

  } catch (error) {

    if(error instanceof TypeError){
      res.json({ error: error.message , status:400 }) ;
       } else {
      res.json({ error: 'Request could not be processed. Maybe due to dupplicated Recipe Name' , status:422 }) ;
      }

  }
}


const json = {"name":"ags","summary":"etcetc","hscore":4,"instructions":"p","diets":["vegan"]}

// http://localhost:3001/recipes 