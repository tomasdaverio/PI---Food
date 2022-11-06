const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeByName = require('./getRecipeByName') ;
const getRecipeById = require('./getRecipeById') ;
const postRecipe = require('./postRecipe') ;
const getDiets = require('./getDiets') ;



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//a partir de aca, todo agregado por mi. Tambien fetch.
//Ver acá la posibilidad de reutilización. Es decir, la facilidad para crear nuevas rutas a partir de lo que armé. Es fácil de armar nuevas??
//probar rutas alternativas. Podria separar entre /diets y /recipes. Luego a partir de ahí derivar.
//también ver rutas de errores de usuario en la URL. 'Atajar todos los posibles errores' - Aunque al ser el back, que recibirá requests del front,
//es más difícil que se equivoque. 
//derivadores : ver si van con la primera barra o no.

router.use('/recipes?name',getRecipeByName) ;
router.use('/recipes/:id',getRecipeById) ;
router.use('/recipes',postRecipe) ;
router.use('/diets',getDiets) ;


module.exports = router;
