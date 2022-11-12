const { Router } = require('express');
const router = Router();
const { fngetRecipebyId } = require('../methods/methods.js')

router.get('/:id', async (req,res)=>{
    const id = Number(req.params.id) ;
    
    try {

        const recipe = await fngetRecipebyId(id) ;
        res.json(recipe) ;

    } catch (error){

        res.send(error.message)

    }
})

module.exports = router ;

