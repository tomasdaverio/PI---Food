const { Router } = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.send('Acá haría un get de Diets')
})

module.exports = router ;

