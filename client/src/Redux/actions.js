import {GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE} from './actiontypes.js'

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

export const addRecipe = (data) => {
    return {type:ADD_NEW_RECIPE,payload:data}
}

