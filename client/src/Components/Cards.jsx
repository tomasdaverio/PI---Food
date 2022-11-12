import React , { useState , useEffect } from 'react' ;
import Card from './Card.jsx' ;
import { useSelector } from "react-redux" ;

function Cards(props){

    // este deberia sacar la cuenta de cuantos renderizar segun props.match.params.id y filtered/recipes, con un state interno.
    //y hacerle un slice al selector q corresponda.

let recipes = useSelector( (state) => state.recipes) ;
let filtered = useSelector( (state) => state.filteredRecipes) ;

let array = [] ;
filtered.length ?  array = filtered  : array = recipes ;

let [location,setLocation] = useState(null) ;

let page = props.match.params.page === undefined ? undefined : Number(props.match.params.page) ;

useEffect(()=>setLocation(page),[]) ;

if(page === undefined || page === 1) array = array.slice(0,array.length >=9 ? 9 : array.length) ;

if(page>1) array = array.slice((page-1)*9,(array.length-((page-1)*9)) >=9 ? 9 : array.length)

console.log((page-1)*9,array.length,(array.length-((page-1)*9)))

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

