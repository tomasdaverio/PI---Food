//importaciones para los metodos:

//fngetDiets:
const dietSet = require('../../../../ownresources/dietset.js')
const { Diet } = require('../../db.js')

//fnpostRecipe:
const { Recipe } = require('../../db.js')

//getrecypebyid:
const fetch = require('node-fetch') ;

//getrecipebyname:
const {Op} = require('sequelize');



module.exports = {
     fngetDiets : async () => {
        //tiene que sacarlas de la tabla Diets de la DB, que tiene que tenerlas previamente asi que las creo:
    
        const dietEntities = dietSet.map(diet => Diet.create({ name: diet })) ;
    
        await Promise.all(dietEntities) ;
    
        //ahora que estan creadas y almacenadas en la DB, las solicito:
    
        const dietsAnswer = Diet.findAll() ;
    
        return dietsAnswer ;
          
    },
    fnpostRecipe : async (name,summary,hscore,instructions,diets) => {

        //Chequeo los campos obligatorios (name,summary) - aunque deberia validarse en el front:
        if(!name || !summary) throw new Error({message: 'Recipe cannot be created with lack of name or summary'}) ;

        if(typeof name !== 'string' || typeof summary !== 'string') throw new Error({message: 'typeof name|summary must be string'}) ;

        //Creo la receta con los parametros enviados por el usuario a traves del formulario/front:
        const recipeObj = {
            name,
            summary,
            hscore: hscore ? hscore : null,
            instructions: instructions ? instructions : null
        }
       
        const recipe = await Recipe.create(recipeObj);

        if(diets.length){

            let dietArray =[];

            const dietsObj = diets.map( diet => { return {['name']: diet} }) ;

            for(let i = 0 ; i < dietsObj.length ; i++){
                let [dietInstance,created] = await Diet.findOrCreate({where:dietsObj[i],defaults: dietsObj[i]}) ;
                dietArray.push(dietInstance) ;
            }

            await Promise.all(dietArray) ;

            let asoc = dietArray.map(dietinst => recipe.setDiets(dietinst))

            await Promise.all(asoc) ;
        }
        
        return {...recipe.dataValues,['diets']:diets} ;           
    },
    fngetRecipebyId : async (id) => {

        if(!id || (typeof id !== 'number' && typeof id !== 'string')) throw new Error({message: 'ID error'}) ;

        let recipe;
        let diets;
        let precipe;

        if(id<30000) {

          precipe = await Recipe.findByPk(id, {
                include: {
                    model: Diet,
                    attributes: ['name']
                    ,through: {
                      attributes: [] 
                    }
                  }
              })
        diets = precipe.diets.length ? precipe.diets.map(d=>d.name) : [] ;
                
        } else {
            const search = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=26623d87ef014d3daeab072510ec275a`) ;
            precipe = await search.json() ;
            const vegetarian = precipe.vegetarian === 'true'  ? 'vegetarian' : 'no' ;
            const vegan = precipe.vegan === 'true'  ? 'vegan' : 'no' ;
            const glutenFree = precipe.glutenFree === 'true' ? 'gluten free' : 'no' ;
            const dietsArray = [...new Set([...precipe.diets,vegetarian,vegan,glutenFree])]
            diets = dietsArray.filter( e => e !== 'no') ; 
        }
      
        recipe = {
            id: precipe.id, 
            name: precipe.name ? precipe.name : precipe.title,
            summary: precipe.summary,
            dishTypes: precipe.dishTypes ? precipe.dishTypes : null,
            instructions: precipe.instructions ? precipe.instructions : null,
            image: precipe.image ? precipe.image : null,
            hscore: precipe.hscore ? precipe.hscore : precipe.healthScore,
            diets: diets
        }
        
        return recipe ;          
    },
    fngetRecipebyName : async (name) => {

        if(!name || typeof name !== 'string') throw new Error({message: 'Lack of name'}) ;

        //La busco en la DB (si no la encuentra devuelve null en teoria)
        let recipesDB ;
        //deberia hacer mi propio metodo para que tenga lowercase ademas. Faltan diets ademas
        let searchDB = await Recipe.findAll({where: {name:{[Op.or]: { [Op.iLike]: `${name}%`, [Op.iLike]: `%${name}%`}}},
           attributes: { exclude: ['instructions','createdAt','updatedAt'] },
            include: {
              model: Diet,
              through: {
                attributes: [] 
              }
            }
          })
        if(searchDB.length) {
         recipesDB = searchDB.map( recipe => {
            const obj = {
                id:recipe.id,
                image: null,
                name: recipe.name,
                diets: recipe.diets.map( diet => diet.name),
                dishTypes: null,
                hscore: recipe.hscore          
            }
            return obj ;  
        }) 
        
         await Promise.all(recipesDB)
       
        } else {
            recipesDB = [] ;   
        }
       
        const search = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a&addRecipeInformation=true&number=100')
        const answer = await search.json() ;
        let recipesApp = answer.results.map( recipe => {   
                
          const vegetarian = recipe.vegetarian ? 'vegetarian' : 'no' ;
          const vegan = recipe.vegan ? 'vegan' : 'no' ;
          const glutenFree = recipe.glutenFree ? 'gluten free' : 'no' ;
          const dietsArray = [...new Set([...recipe.diets,vegetarian,vegan,glutenFree])]
          const finalArray = dietsArray.filter( e => e !== 'no') ;
          const obj = {
              id:recipe.id,
              image: recipe.image,
              name: recipe.title,
              diets: finalArray,
              dishTypes: recipe.dishTypes,
              hscore: recipe.healthScore          
          }
          
          return obj ;  
        }) 
        
        await Promise.all(recipesApp)
                     
        let recipesAPI = recipesApp.filter( recipe => recipe['name'].toLowerCase().includes(name))
        
        //despues agregar el Set
        const finalAnswer = [recipesDB,recipesAPI].flat() ;
        
        return finalAnswer ;
        
    }
}