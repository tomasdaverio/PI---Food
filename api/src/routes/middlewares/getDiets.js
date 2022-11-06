const { Router } = require('express');
const router = Router();
const { fngetDiets } = require('../methods/methods.js')

// Ruta oficial:
router.get('/', async (req,res) => {

    try{

        const diets = await fngetDiets();
        return res.json(diets) ;

    } catch (e){

        return res.send(e.message)

    }
})


// Ruta testigo:
// router.get('/',(req,res)=>{
//     res.send('Acá haría un get de Diets')
// })

module.exports = router ;

