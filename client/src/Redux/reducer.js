import {GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE} from './actiontypes.js'

const initialState = {
    recipes: [],
    recipeDetail: {}
  };

const rootReducer = (state=initialState,action)=>{

    switch(action.type){

        case GET_RECIPE_BY_NAME:
            
        return {
            ...state, recipes:action.payload
        }

        case GET_RECIPE_BY_ID:
            
        return {
            ...state, recipeDetail:action.payload
        }

        case ADD_NEW_RECIPE:
            
        return {
            ...state, recipes:[...state.recipes,action.payload]
        } 

        default: return state ;
    }
}

export default rootReducer ;