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
    fnpostRecipe : async (name,summary,hscore,steps,diets) => {

        //Chequeo los campos obligatorios (name,summary) - aunque deberia validarse en el front:
        if(!name || !summary) throw new Error({message: 'Recipe cannot be created with lack of name or summary'}) ;

        if(typeof name !== 'string' || typeof summary !== 'string') throw new Error({message: 'typeof name|summary must be string'}) ;

        //Creo la receta con los parametros enviados por el usuario a traves del formulario/front:
        const recipeObj = {
            name,
            summary,
            hscore: hscore ? hscore : null,
            steps: steps ? steps : null,
        }

        const recipe = await Recipe.create(recipeObj);

        if(diets.length){

            let dietArray =[];

            const dietsObj = diets.map( diet => { return {['name']: diet} }) ;

            for(let i = 0 ; i < dietsObj.length ; i++){
                console.log(dietsObj[i])
                let [dietInstance,created] = await Diet.findOrCreate({where:dietsObj[i],defaults: dietsObj[i]}) ;
                dietArray.push(dietInstance)
            }

            await Promise.all(dietArray) ;

            let asoc = dietArray.map(dietinst => recipe.setDiets(dietinst))

            await Promise.all(asoc) ;
        }    
        return recipe ;           
    },
    fngetRecipebyId : async (id) => {

        if(!id || (typeof id !== 'number' && typeof id !== 'string')) throw new Error({message: 'ID error'}) ;

        //La busco en la DB (si no la encuentra devuelve null en teoria)
        let recipe;

        if(Number(id)<30000) {
            recipe = await Recipe.findByPk(Number(id),
            {include: Diet});
            console.log(recipe)
        } else {
            const search = await fetch('https://api.spoonacular.com/recipes/715594/information?apiKey=26623d87ef014d3daeab072510ec275a') ;
            const answer = await search.json() ;
            
            const vegetarian = answer.vegetarian === 'true'  ? 'vegetarian' : 'no' ;
            const vegan = answer.vegan === 'true'  ? 'vegan' : 'no' ;
            const glutenFree = answer.glutenFree === 'true' ? 'gluten free' : 'no' ;
            const dietsArray = [...new Set([...answer.diets,vegetarian,vegan,glutenFree])]
            const finalArray = dietsArray.filter( e => e !== 'no') ;
            recipe = {
                id:answer.id,
                image: answer.image,
                name: answer.title,
                diets: finalArray,
                dishTypes: answer.dishTypes,
                summary: answer.summary,
                hscore: answer.healthScore,
                steps: answer.instructions          
            }
        }
        return recipe ;           
    },
    fngetRecipebyName : async (name) => {

        if(!name || typeof name !== 'string') throw new Error({message: 'Lack of name'}) ;

        //La busco en la DB (si no la encuentra devuelve null en teoria)
        let recipesDB ;
        //deberia hacer mi propio metodo para que tenga lowercase ademas. Faltan diets ademas
        let searchDB = await Recipe.findAll({where: {name:{[Op.or]: { [Op.iLike]: `${name}%`, [Op.iLike]: `%${name}%`}}},
           attributes: { exclude: ['steps','createdAt','updatedAt'] },
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
                image: recipe.image,
                name: recipe.name,
                diets: recipe.diets.map( diet => diet.name),
                dishTypes: recipe.dishTypes,
                hscore: recipe.hscore          
            }
          
            return obj ;  
        }) 
        
         await Promise.all(recipesDB)
       
        } else {
            recipesDB = [] ;

            
        }
        return recipesDB ;
        // }
        // const search = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=26623d87ef014d3daeab072510ec275a&addRecipeInformation=true&number=100')
        // const answer = await search.json() ;
        // let recipesApp = answer.results.map( recipe => {   
                
        //   const vegetarian = recipe.vegetarian ? 'vegetarian' : 'no' ;
        //   const vegan = recipe.vegan ? 'vegan' : 'no' ;
        //   const glutenFree = recipe.glutenFree ? 'gluten free' : 'no' ;
        //   const dietsArray = [...new Set([...recipe.diets,vegetarian,vegan,glutenFree])]
        //   const finalArray = dietsArray.filter( e => e !== 'no') ;
        //   const obj = {
        //       id:recipe.id,
        //       image: recipe.image,
        //       name: recipe.title,
        //       diets: finalArray,
        //       dishTypes: recipe.dishTypes,
        //       hscore: recipe.healthScore          
        //   }
          
        //   return obj ;  
        // }) 
        
        // await Promise.all(recipesApp)
                     
        // let recipesAPI = recipesApp.filter( recipe => recipe['name'].toLowerCase().includes(name))
        
        // //despues agregar el Set
        // const finalAnswer = [recipesDB,recipesAPI].flat() ;
        
        // return finalAnswer 
        
    }
}