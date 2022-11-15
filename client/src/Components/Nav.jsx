import React from 'react' ;
import { NavLink } from 'react-router-dom' ;
import style from '../Styles/Nav.module.css' ;
import SearchBar from './SearchBar' ;
import image from '../resources/img/logoHenry.png' ;

function Nav (){
    return(
        <div className={style.navbar}>
            <img alt="img not loaded.." src={image} />
            <span><NavLink to={'/app'} className={style.main}>Home</NavLink></span>
            <SearchBar />
            <span><NavLink to={'/app/recipe/create'} className={style.main}>Create your own Recipe!</NavLink></span>
            
        </div>
    )
}

export default Nav ;