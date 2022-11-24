const { Router } = require('express');
const router = Router();
const { fngetDiets } = require('../methods/methods.js')

router.get('/', async (req,res,next) => {

    try{

        const diets = await fngetDiets();
        return res.json(diets) ;

    } catch (e){

       next(e) ;

    }
})


module.exports = router ;

