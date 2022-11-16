import React from 'react' ;
import img from '../resources/img/about2.jpg' ;
import style from '../Styles/About.module.css' ;

function About (){

    //about seria aplicacion creada con sequelize postgres node react redux html css

    return(
    <div className={style.carddetail}>
    <h1>Welcome to Food Recipe API!</h1>
    <img src={img} alt='img'/>
    
    <h4>Here you will be able to:</h4>
    <ul>
        <li >Find all kind of recipes searching by type of diet or health score</li>
        <li >Order and filter them according to diferent criteria</li>
        <li >Create your own recipe for being part of Food Recipes API</li>
        
    </ul>

    
    
    <div className={style.diets}>
    <h3>Enjoy it!</h3>
    
    </div>
    
    <h4>Health Score: This an entire number from 0 to 100 which represents the grade of cover of nutrients of the recipe. The higher, the healthier. </h4>
        
    </div>
    )
}

export default About ;