import { GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE, 
    ORDER_BY_HEALTHSCORE_ASC, ORDER_BY_HEALTHSCORE_DESC, ORDER_BY_AZ,
    ORDER_BY_ZA, FILTER_BY_DIET, REMOVE_FILTER} from './actiontypes.js' ;

export const getRecipeByName = (recipe) => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/recipes?name=${recipe}`)
        .then (response => response.json())
        .then ( data => dispatch({type:GET_RECIPE_BY_NAME, payload:data}))
    }
}

export const getRecipeById = (id) => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/recipes/${id}`)
        .then (response => response.json())
        .then ( data => dispatch({type:GET_RECIPE_BY_ID, payload:data}))
    }
}


export const orderCreator = (type) => {
    return {type:type}
}

export const filterByDiet = (diets) => {
    return {type:FILTER_BY_DIET,payload:diets}
}

export const removefilter = () => {
    return {type:REMOVE_FILTER}
}

export const addRecipe = (data) => {
    return {type:ADD_NEW_RECIPE,payload:data}
}

