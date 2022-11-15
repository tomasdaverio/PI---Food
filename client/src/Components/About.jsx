import React from 'react' ;
import img from '../resources/img/about2.jpg' ;
import style from '../Styles/About.module.css' ;

//dividir en About, Help, e Intro/Landing a la API.
function About (){

     return(
            <div className={style.carddetail}>
            <h1>Welcome to Food Recipe API!</h1>
            <img src={img} alt='img'/>
            <div className={style.diets}>
            <h4>Here you will be able to:</h4>
            <ul>
             <li>Find all kind of recipes searching by name. I.E of searchs: Pizza, hamburguer </li> 
             <li>Order them by AZ, ZA, and Health Score</li>  
             <li>Filter them by kind of diet : vegan, vegetarian, pescatarian, whole 30, ketogenic, etc.</li> 
             <li>Take a deeper view on a particular recipe, by going to 'details' or clicking the image or title of the recipe</li> 
             <li>Create your own recipe by filling a Form</li>
            </ul>
            </div>
            <div className={style.diets}>
            <h3>Enjoy it!</h3>
            
            </div>
            <div className={style.diets}>
            <h4>Health Score: This an entire number from 0 to 100 which represents the grade of cover of nutrients of the recipe. The higher, the healthier. </h4>
            </div>
            
            </div>
        )

}

export default About ;

