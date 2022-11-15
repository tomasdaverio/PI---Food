import React from 'react' ;
import { NavLink , Link } from 'react-router-dom' ;
import style from '../Styles/Card.module.css' ;
import { imgdefault } from '../resources/resources.js' ;

function Card (props){
return(
    <div className={style.cardcontainer}>
        <img alt='img' src={props.image ? props.image : imgdefault}/>
        <h2>{props.name}</h2>
        <h4>Diets:</h4>
        {props.diets ? props.diets.map(diet => <span> - {diet} </span> ) : null}
        
        <p><NavLink to={`/app/recipes/${props.id}`} className={style.link}>Click for details!</NavLink></p>  
        
    </div>
)
}

export default Card;