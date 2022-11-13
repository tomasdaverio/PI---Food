import React from 'react' ;
import { Link } from 'react-router-dom' ;
import style from '../Styles/Nav.module.css' ;
import SearchBar from './SearchBar' ;
import image from '../resources/img/logoHenry.png' ;

function Nav (){
    return(
        <div className={style.navbar}>
            <img alt="img not loaded.." src={image} />
            <span><Link to={'/'}>Home</Link></span>
            <SearchBar />
            <span><Link to={'/recipe/create'}>Create your own Recipe!</Link></span>
            
        </div>
    )
}

export default Nav ;