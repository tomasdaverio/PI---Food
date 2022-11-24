const { fnpostRecipe } = require('../methods/methods.js') ;

module.exports = async (req,res) => {

  const {name,summary,hscore,instructions,diets} = req.body ;

   try {

    const recipe = await fnpostRecipe(name,summary,hscore,instructions,diets) ;
    return res.json(recipe) ;

  } catch (error) {

    if(error instanceof TypeError){
      res.status(400).json({ error: error.message , status:400 }) ;
       } else {
      res.status(422).json({ error: 'Request could not be processed. Maybe due to dupplicated Recipe Name' , status:422 }) ;
      }

  }
}