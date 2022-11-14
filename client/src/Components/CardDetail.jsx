import React, { useEffect } from 'react' ;
import { useDispatch,useSelector } from 'react-redux' ;
import { getRecipeById } from '../Redux/actions.js' ;
import { imgdefault } from '../resources/resources.js' ;
import style from '../Styles/CardDetail.module.css' ;


function CardDetail (props){

    const id = props.match.params.id ;

    const recipe = useSelector((state) => state.recipeDetail) ;

    const dispatch = useDispatch() ;

    useEffect(()=> dispatch(getRecipeById(id)),[id]) ;

    if(recipe){

        return(
            <div className={style.carddetail}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image ? recipe.image : imgdefault } alt='img'/>
            <div className={style.diets}>
            <h4>Diets:</h4>
            <ul>{recipe.diets ? recipe.diets.map(diet => <li>{diet}</li> ) : '' }</ul>
            </div>
            <div className={style.diets}>
            <h4>Dish Types:</h4>
            <ul>{recipe.dishTypes ? recipe.dishTypes.map(dish => <li>{dish}</li> ) : '' }</ul>
            </div>
            <div className={style.diets}>
            <h4>Health Score = {recipe.hscore}</h4>
            </div>
            <h3>Summary:</h3>
            <p>{recipe.summary ? recipe.summary: null}</p>
            <h3>Instructions:</h3>
            <div>{recipe.instructions}</div>
           

            </div>
        )

    } else {
        return(

            <h1>Loader</h1>
            
        )
    }
}

export default CardDetail ;

