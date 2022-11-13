import React from 'react' ;
import Card from './Card.jsx' ;
import { useSelector } from "react-redux" ;
import style from '../Styles/Cards.module.css' ;
import { Link } from 'react-router-dom' ;

function Cards(props){

let recipes = useSelector( (state) => state.recipes) ;
let filtered = useSelector( (state) => state.filteredRecipes) ;

let array = [] ;
filtered.length ?  array = filtered  : array = recipes ;

let page = (props.match.params.page === undefined ? undefined : Number(props.match.params.page)) ;

if(page === undefined || page === 1) array = array.slice(0,array.length >=9 ? 9 : array.length) ;

if(page>1) array = array.slice((page-1)*9,(array.length-((page-1)*9)) >=9 ? page*9 : array.length) ;

if(array.length && filtered !== 'empty'){
    
    return(
        <div className={style.Cardscontainer}>
        {array.map( recipe =>
        <Card 
        name = {recipe.name}
        image = {recipe.image}
        diets = {recipe.diets}
        id = {recipe.id}
        key = {recipe.id}
        />
        )}
        </div>
    )
} else if(filtered === 'empty'){
    return (
    <>
    <h2>0 results</h2>
    <h3><Link to={'/'}>Go back Home</Link></h3>
    </>
    )

} else {

    return(
        <h2>Search your recipes</h2>
    )
               
}
}

export default Cards ;

