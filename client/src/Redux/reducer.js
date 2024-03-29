import { GET_RECIPE_BY_NAME , GET_RECIPE_BY_ID , ADD_NEW_RECIPE, 
    ORDER_BY_HEALTHSCORE_ASC, ORDER_BY_HEALTHSCORE_DESC, ORDER_BY_AZ,
    ORDER_BY_ZA, FILTER_BY_DIET, REMOVE_FILTER, CLEAN_DETAIL } from './actiontypes.js' ;

import { quickSort, sortAZ , sortZA , quickSortDESC } from './methods.js' ;

const initialState = {
    recipes: [],
    recipeDetail: {},
    filteredRecipes: [],
    filterApplied: 'None',
    orderApplied: 'None'
  };

const rootReducer = (state=initialState,action)=>{


     switch(action.type){

        case GET_RECIPE_BY_NAME:
            
            return {
                ...initialState , recipes:action.payload, 
            }

        case GET_RECIPE_BY_ID:
            
            return {
                ...state, recipeDetail:action.payload
            }

        case ADD_NEW_RECIPE:
            
            return {
                ...state, recipes:[...state.recipes,action.payload]
            }

        case ORDER_BY_HEALTHSCORE_ASC:
        
            return {
                ...state, recipes: [...quickSort(state.recipes)] , filteredRecipes:[...quickSort(state.filteredRecipes)] ,  orderApplied: 'Less Healthy to More Healthy'
            }
        
        case ORDER_BY_HEALTHSCORE_DESC:
            
            return {
                ...state, recipes: [...quickSortDESC(state.recipes)] , filteredRecipes:[...quickSortDESC(state.filteredRecipes)] , orderApplied: 'More Healthy to Less Healthy'
            }

        case ORDER_BY_AZ:
            
            return {
                ...state, recipes: [...sortAZ(state.recipes)] , filteredRecipes:[...sortAZ(state.filteredRecipes)] , orderApplied: 'From A to Z'
            }

        case ORDER_BY_ZA:
            
            return {
                ...state, recipes: [...sortZA(state.recipes)] , filteredRecipes:[...sortZA(state.filteredRecipes)] , orderApplied: 'From Z to A'
            }

        case FILTER_BY_DIET:

            let results = state.recipes.filter( recipe => recipe.diets.includes(action.payload)) ;
            let value = results.length ? results : 'empty' ;

            return {
                ...state, filteredRecipes: value , filterApplied: action.payload
            }

        case REMOVE_FILTER:
            
            return {
                ...state, filteredRecipes: [] , filterApplied: 'None'
            }
        
        case CLEAN_DETAIL:

           return {
                ...state, recipeDetail: {}
           }

        default: return state ;
    }
}

export default rootReducer ;