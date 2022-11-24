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

//Qué arreglo voy a mostrar?
(filtered.length && filtered !== 'empty')  ?  array = filtered  : array = recipes ;

if(filtered === 'empty') {
        return (
        <>
        <h1 className={style.results}>0 results for your search</h1>
        <button onClick={()=>{
            dispatch(removefilter()) ;
            document.getElementById('elementCT').click();
            }} 
        className={style.buttonClean}
        >
        Click me to return Home 🏚️</button>
        <NavLink to={'/app/1'}><span id='elementCT'></span></NavLink>
        </>
        )
        
} else if(recipes === 'outofservice'){

    return(

        <div className={style.out}>
        <h2>Temporary out of service. Please, try again later.</h2>
        </div>
    )  


} else if (array.length){

    //En qué página estoy?

let page = Number(props.match.params.page) ;

//Si estoy en /app o app/1, muestro desde posición 0 hasta..

if(page === 1) array = array.slice(0,array.length >=9 ? 9 : array.length) ;

//Si estoy en app/>1, muestro desde posición x hasta y..

if(page > 1) array = array.slice((page-1)*9,(array.length-((page-1)*9)) >=9 ? page*9 : array.length) ;

    return(
        <>
        <div className={style.sortfilt}>
        <Sorter />
        <Filter />  
        </div>
        <div className={style.Cards}>
        <Page page={page}/>
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
        <Page page={page}/>
        </div>
        <NavLink to={'/app/1'}><span id='elementCL'></span></NavLink>
        </div>
        </>
    )

} else {

    return(

        <div className={style.cardsresults}>
        <h3>Loading..</h3>
        </div>
    )     
}
}

export default Cards ;
