import React, { useEffect } from 'react' ;
import Card from './Card.jsx' ;
import { connect } from "react-redux";
import { getRecipeByName , filterByDiet } from '../Redux/actions.js'

function Cards(props){

let recipes = props.recipes ;
let filtered = props.filteredRecipes ;



if(recipes){
   
    return(
        <div>
        {recipes.map( recipe =>
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
} else {
    return(
        <h2>Search your recipes</h2>
    )
               
}
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        filteredRecipes: state.filteredRecipes
    }
}

const mapDispatchToProps = {
    getRecipeByName
}

export default connect(mapStateToProps,mapDispatchToProps) (Cards);

