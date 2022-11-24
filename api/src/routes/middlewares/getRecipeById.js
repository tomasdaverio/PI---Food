const { Router } = require('express');
const router = Router();
const { fngetRecipebyId } = require('../methods/methods.js')

router.get('/:id', async (req,res)=>{
    
    
    try {
        const id = req.params.id ;
        const recipe = await fngetRecipebyId(id) ;
        res.json(recipe) ;

    } catch (error){

       if(error.message === 'ID error'){
        res.status(400).json({ error: error.message , status:400 }) ;
       } else {
        res.status(503).json({ error: 'Sorry. We have problems with the server.Please, try again later' , status:503 }) ;
       }
    }
})

module.exports = router ;

