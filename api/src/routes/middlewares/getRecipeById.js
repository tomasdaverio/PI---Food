const { Router } = require('express');
const router = Router();
const { fngetRecipebyId } = require('../methods/methods.js')

router.get('/:id', async (req,res,next)=>{
    
    
    try {
        const id = req.params.id ;
        const recipe = await fngetRecipebyId(id) ;
        res.json(recipe) ;

    } catch (error){

       next(error) ;

    }
})

module.exports = router ;

