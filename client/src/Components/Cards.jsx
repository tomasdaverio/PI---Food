import React from 'react' ;
import Card from './Card.jsx' ;
import { useSelector } from "react-redux" ;

function Cards(props){

let recipes = useSelector( (state) => state.recipes) ;
let filtered = useSelector( (state) => state.filteredRecipes) ;

let array = [] ;
filtered.length ?  array = filtered  : array = recipes ;

if(array.length && filtered !== 'empty' ){
    
    return(
        <div>
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
    return (<h2>0 results</h2>)
} else {

    return(
        <h2>Search your recipes</h2>
    )
               
}
}

export default Cards ;

