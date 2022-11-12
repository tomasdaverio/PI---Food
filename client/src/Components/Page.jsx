import React, { useState , useEffect } from 'react' ;
import Cards from './Cards.jsx' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { Link } from 'react-router-dom' ;
import { Redirect } from 'react-router' ;

function Page(props){

    let [page,setPage] = useState(1) ;

    let recipes = useSelector((state)=> state.recipes) ;
    let filtered = useSelector((state)=> state.filteredRecipes) ;

    let topage = (filtered !== 'empty' && filtered.length) ? filtered.length : recipes.length ;

    let enteros = Math.floor(topage / 9) ;
    let resto = topage % 9 !== 0 ? 1 : 0 ;

    let pages = enteros + resto ;

    if(pages>1){
        var dev = [] ;
        for(let i=1;i<pages+1;i++){
            dev.push(<span><Link to={`/${i}`}>{i}</Link></span>)
        }    
      return (
         <footer>
        {dev.map( page => page)}  
        </footer>
      )
    } else if(pages === 1){
      return (
        <footer>
       <span><Link to={`/1`}>1</Link></span> 
       </footer>
     )
      
    } else {
        return(null) ;
    }
}

export default Page ;