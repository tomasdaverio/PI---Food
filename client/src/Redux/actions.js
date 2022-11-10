import { GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE, 
    ORDER_BY_HEALTHSCORE_ASC, ORDER_BY_HEALTHSCORE_DESC, ORDER_BY_AZ_ASC,
    ORDER_BY_AZ_DESC, FILTER_BY_DIET } from './actiontypes.js' ;

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

export const orderbyHealthScoreASC = () => {
    return {type:ORDER_BY_HEALTHSCORE_ASC}
}

export const orderbyHealthScoreDESC = () => {
    return {type:ORDER_BY_HEALTHSCORE_DESC}
}

export const orderByAZASC = () => {
    return {type:ORDER_BY_AZ_ASC}
}

export const orderByAZDESC = () => {
    return {type:ORDER_BY_AZ_DESC}
}

export const addRecipe = (data) => {
    return {type:ADD_NEW_RECIPE,payload:data}
}

