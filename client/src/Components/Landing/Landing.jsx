import React from 'react' ;
import style from './Landing.module.css' ;
import { NavLink } from 'react-router-dom' ;

function Landing (){

    return(
    
    <div className={style.carddetail}>
    <h1>Welcome !</h1>
    <h1> <NavLink to={'/app'} className={style.landinglink}>Henry Food</NavLink></h1>
    <h4>Here you will be able to:</h4>
    <ul>
        <li >Find all kind of recipes searching by type of diet or health score</li>
        <li >Order and filter them according to diferent criteria</li>
        <li >Create your own recipe for being part of Food Recipes API</li>
        
    </ul>
     
    <div className={style.diets}>
    <h3>Enjoy it!</h3>
    
    </div>
          
    </div>
    
    )
}

export default Landing ;