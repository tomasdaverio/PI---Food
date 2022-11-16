import React from 'react' ;
import img from '../resources/img/about2.jpg' ;
import style from '../Styles/About.module.css' ;

function About (){

    return(
    <div className={style.carddetail}>
    <h1>Welcome to Food Recipe API!</h1>
    <img src={img} alt='img'/>
    
    <h4>Here you will be able to:</h4>
    <ul>
        <li key='1'>Find recipes searching by name</li>
        <li key='2'>Order and filter them according to diferent criteria</li>
        
    </ul>

    
    
    <div className={style.diets}>
    <h3>Enjoy it!</h3>
    <text>la concha de la lora</text>
    </div>
    
    <h4>Health Score: This an entire number from 0 to 100 which represents the grade of cover of nutrients of the recipe. The higher, the healthier. </h4>
        
    </div>
    )
}

export default About ;