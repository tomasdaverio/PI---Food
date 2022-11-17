import { GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE, FILTER_BY_DIET, REMOVE_FILTER} from './actiontypes.js' ;

export const getRecipeByName = (recipe) => {
   return async (dispatch) => {
    try{
        const response = await fetch(`http://localhost:3001/recipes?name=${recipe}`) ;
        const pay = await response.json() ;
        dispatch({type:GET_RECIPE_BY_NAME, payload:pay}) ;
           
    } catch (error) {
        console.log(error.message);
        alert('We have problems with the server. Try again later') ;
    }
   }
}

export const getRecipeById = (id) => {
    return async (dispatch) => {
     try{
         const response = await fetch(`http://localhost:3001/recipes/${id}`) ;
         const pay = await response.json() ;
         dispatch({type:GET_RECIPE_BY_ID, payload:pay}) ;
            
     } catch (error) {
         console.log(error.message);
         alert('We have problems with the server. Try again later') ;
     }
    }
 }


export const addRecipe = (data) => {
    return async (dispatch) => {
     try{
         const response = await fetch('http://localhost:3001/recipes', {
         method: 'POST', 
         body: JSON.stringify(data), 
         headers:{
           'Content-Type': 'application/json'
         }
         })
         const pay = await response.json() ;
         dispatch({type:ADD_NEW_RECIPE, payload:pay});
         alert('Recipe Created Succesfully :)')
    
     } catch (error) {
         console.log(error.message);
         alert('Recipe Creation Error :(') ;
     }
    }
 }

export const orderCreator = (arg) => {
    document.getElementById('elementID').click();
    return {type:arg}
}

export const filterByDiet = (diets) => {
    document.getElementById('elementDI').click();
    return {type:FILTER_BY_DIET,payload:diets}
}

export const removefilter = () => {
    return {type:REMOVE_FILTER}
}
