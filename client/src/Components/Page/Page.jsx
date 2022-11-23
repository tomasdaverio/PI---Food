import React from 'react' ;
import { useSelector } from 'react-redux' ;
import { NavLink } from 'react-router-dom' ;
import style from './Page.module.css' ;

function Page(props){

    let recipes = useSelector((state)=> state.recipes) ;
    let filtered = useSelector((state)=> state.filteredRecipes) ;

    let topage = (filtered !== 'empty' && filtered.length) ? filtered.length : recipes.length ;

    let enteros = Math.floor(topage / 9) ;
    let resto = topage % 9 !== 0 ? 1 : 0 ;

    let pages = enteros + resto ;

    if(pages>1 && filtered !== 'empty'){
        var dev = [] ;
        for(let i=1;i<pages+1;i++){
            dev.push(
            <span key={i}><NavLink to={`/app/${i}`} className={isActive => (!isActive ? style.navno : style.navyes)}>{i}</NavLink></span>)
        }    
      return (
        <div className={style.page}>
       { props.page >1 ? <span key={'prev'}><NavLink to={`/app/${props.page-1}`} className={style.btn}>{'<Prev'}</NavLink></span> : null}
        {dev.map( page => page)}  
       { props.page <pages ? <span key={'next'}><NavLink to={`/app/${props.page+1}`} className={style.btn}>{'Next>'}</NavLink></span> : null }
        </div>
      )
    } else if(pages === 1 && filtered !== 'empty'){
      return (
        <footer>
        <span key={'1'}><NavLink to={`/app/1`} className={style.navyes}>1</NavLink></span>
        </footer>
     )
      
    } else {
        return(null) ;
    }
}

export default Page ;