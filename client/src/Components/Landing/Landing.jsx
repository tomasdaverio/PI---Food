import React from 'react' ;
import style from './Landing.module.css' ;
import { NavLink } from 'react-router-dom' ;

function Landing (){

    return(
    
    <div className={style.carddetail}>
    <h1>Hi! Welcome to Food Recipes!🙂</h1>
    <h4>Here you will be able to:</h4>
    <ul>
        <li >Find all kind of recipes searching by name</li>
        <li >Order and filter it according to different criteria</li>
        <li >Create your own recipe for being part of Food Recipes API</li>
    </ul>
    <div className={style.diets}>
    <h3>We hope you enjoy it! Let's get into:</h3>
    <h1> <NavLink to={'/app/1'} className={style.landinglink}>Click me!</NavLink></h1>
    </div>
    </div>
    
    )
}

export default Landing ;