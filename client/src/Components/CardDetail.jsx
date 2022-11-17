import React, { useEffect } from 'react' ;
import { useDispatch,useSelector } from 'react-redux' ;
import { getRecipeById } from '../Redux/actions.js' ;
import { imgdefault } from '../resources/resources.js' ;
import style from '../Styles/CardDetail.module.css' ;


function CardDetail (props){

    const id = props.match.params.id ;

    let recipe = useSelector((state) => state.recipeDetail) ;

    const dispatch = useDispatch() ;

    useEffect(()=> dispatch(getRecipeById(id)),[id]) ;

    
  // For Cleaning the last presentation:
    useEffect(()=> { return ()=> {
      return  recipe = {name:'',image: imgdefault, diets:[],dishTypes:[], hscore: null, summary:'', instructions:''} ;
    } 
    }) ;

    if(recipe){

        return(
            <div className={style.carddetail}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image ? recipe.image : imgdefault } alt='img'/>
            <h3>Summary:</h3>
            <div className={style.cardsummary} dangerouslySetInnerHTML={{__html: recipe.summary}} />
            <div className={style.row}>
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
            <p className={style.cardp}><b>Health Score</b>: What is it? It's a number that measure the grade of cover of nutrients of the recipe. The higher, the healthier.</p>
            </div>
            </div>
            <div className={style.cardinstructions}>          
            <h3>Instructions:</h3>
            <div dangerouslySetInnerHTML={{__html: recipe.instructions}} />
            </div>
            </div>
        )

    } else {
        return(

            <h1>Loader</h1>
            
        )
    }
}

export default CardDetail ;

