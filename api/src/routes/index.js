const { Router } = require('express');
const { Recipe , Diet } = require('../db') ;  //agregado por mi

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//a partir de aca, todo agregado por mi; Hay que pasarlo a archivos aparte. ver el tema app.use(). Tambien fetch.

router.get('/recipes/:id',(req,res)=>{

})

router.get('/recipes', async (req,res)=>{
const {name} = req.query ;

try{

 const recipesDB =  Recipe.findAll({where:{name: {[Op.substring]: name}}}) ;
 const recipesApi = fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a&addRecipeInformation=true&number=100',)
 const recipesArray = [recipesDB,recipesApi] ;
 await Promise.all(recipesArray) ;
 return res.json(recipesArray.flat()) ;

} catch (error){
 res.send('No existen coincidencias con la palabra solicitada')
}
})




module.exports = router;
