import React from 'react' ;
import style from './About.module.css' ;
import { NavLink } from 'react-router-dom' ;

function About (props){

    return(
    
        <div className={style.carddetail}>
        <h1>Welcome !</h1>
        <h3>This is a Food Recipes Web App designed with academic purposes in the context of Web Full Stack Developer career of <a href='https://www.soyhenry.com/'>Henry</a></h3>
        <h3>The technologies used for this purpose are Node JS, Sequelize, Postgres, React, Redux, HTML, and CSS. <br></br>
            The information of recipes comes from Spoonacular API. 
        </h3>
        <h3>Here you will be able to:</h3>
        <ul>
            <li >Find all kind of recipes searching through the Recipe <NavLink to={'/app'}>SearchBar</NavLink> by name.</li>
            <li >Order and filter recipes according to different criteria using the filters and sorters provided.</li>
            <li >Create your own recipe through a <NavLink to={'/app/recipe/create'}>Form</NavLink>, to enrich this Food Recipes Web App.</li>
        </ul>
        <h3>We hope you can enjoy it!</h3>
        </div>
        
        )
   
}


export default About ;