import React, { useEffect } from 'react' ;
import { useDispatch,useSelector } from 'react-redux' ;
import { getRecipeById } from '../Redux/actions.js' ;

function CardDetail (props){

    const id = props.match.params.id ;

    const recipe = useSelector((state) => state.recipeDetail) ;

    const dispatch = useDispatch() ;

    useEffect(()=> dispatch(getRecipeById(id)),[id]) ;

    if(recipe){

        return(
            <div>
            <h1>Recipe: {recipe.name}</h1>
            <h3>Diets: {recipe.diets ? recipe.diets.map(diet => <span> - {diet} </span> ) : '' }</h3>
            <h4>Dish Types: {recipe.dishTypes ? recipe.dishTypes.map(dish => <span> - {dish} </span> ) : '' }</h4>
            <h5>Health Score = {recipe.hscore}</h5>
            <h6>Summary:</h6>
            <p>{recipe.summary}</p>
            <img src={recipe.image} alt='img'/>
            <div>{recipe.steps ? recipe.steps : null}</div>
            </div>
        )

    } else {
        return(

            <h1>Loader</h1>
            
        )
    }
}

export default CardDetail ;