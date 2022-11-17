import React from 'react' ;
import Card from '../Card/Card.jsx' ;
import { useSelector , useDispatch } from "react-redux" ;
import style from './Cards.module.css' ;
import Sorter from '../Sorter/Sorter.jsx' ;
import Filter from '../Filter/Filter.jsx' ;
import Page from '../Page/Page.jsx' ;
import { removefilter } from '../../Redux/actions.js' ;
import { NavLink } from 'react-router-dom' ;

function Cards(props){

let recipes = useSelector( (state) => state.recipes) ;
let filtered = useSelector( (state) => state.filteredRecipes) ;

const dispatch = useDispatch() ;

let array = [] ;
(filtered.length && filtered !== 'empty')  ?  array = filtered  : array = recipes ;

let page = (props.match.params.page === undefined ? undefined : Number(props.match.params.page)) ;

if(page === undefined || page === 1) array = array.slice(0,array.length >=9 ? 9 : array.length) ;

if(page>1) array = array.slice((page-1)*9,(array.length-((page-1)*9)) >=9 ? page*9 : array.length) ;

if(filtered === 'empty') {
        return (
        <>
        <h1>0 results for your search</h1>
        <button onClick={()=>dispatch(removefilter())} >Click to clean filters and return to Home</button>
        <NavLink to={'/app/1'}><span id='elementCL'></span></NavLink>
        </>
        )
        
} else if (array.length && filtered !== 'empty'){

    return(
        <>
        <div className={style.sortfilt}>
        <Sorter />
        <Filter />  
        </div>
        <Page />
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
        <div>
        <Page />
        </div>
        </>
    )

} else {

    return(
        <div className={style.cardsresults}>
        <h3>0 results</h3>
        </div>
    )
               
}
}

export default Cards ;
