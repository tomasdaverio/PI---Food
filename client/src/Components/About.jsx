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
          
            </div>
            <div className={style.diets}>
            <h3>Enjoy it!</h3>
            
            </div>
            
            <h4>Health Score: This an entire number from 0 to 100 which represents the grade of cover of nutrients of the recipe. The higher, the healthier. </h4>
            
            
            </div>
        )

}

export default About ;

