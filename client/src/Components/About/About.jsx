import React from 'react' ;
import style from './About.module.css' ;
import { NavLink } from 'react-router-dom' ;

function About (props){

    return(
    
        <div className={style.carddetail}>
        <h1>Welcome again!</h1>
        <h3>This is a Food Recipes Web App designed with academic purposes, in the context of Web Full Stack Developer career of <a href='https://www.soyhenry.com/'>Henry</a></h3>
        <h3>The technologies used for this project were React, Redux, Node and Sequelize. <br></br>
            The information of recipes comes from Spoonacular API. 
        </h3>
        <h3>Let's start:</h3>
        <ul>
            <li >If you want to make a Recipe Search and take a look of this site, this is your way: <NavLink to={'/app'}>Let's dive in!</NavLink></li>
            <li >For sharing and creating your own recipe, this way: <NavLink to={'/app/recipe/create'}>Let's create!</NavLink></li>
        </ul>
        <h3>We hope you can enjoy it!🙂</h3>
        </div>
        
        )
   
}


export default About ;