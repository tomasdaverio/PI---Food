const { Router } = require('express');
const router = Router();

router.get('/:id',(req,res)=>{
    const id = req.params.id ;
    res.send(`Acá haría un get de Recipes by ID ${id}`)

})

module.exports = router ;

