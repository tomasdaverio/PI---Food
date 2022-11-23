import React from 'react' ;
import { NavLink } from 'react-router-dom' ;
import style from './Card.module.css' ;
import { imgdefault } from '../../resources/resources.js' ;

function Card (props){
return(
    <div className={style.cardcontainer}>
       
        <NavLink to={`/app/recipes/${props.id}`} className={style.link}>
        <img alt='img' src={props.image ? props.image : imgdefault}/>
        </NavLink>
        <h2><NavLink to={`/app/recipes/${props.id}`} className={style.title}>{props.name}</NavLink></h2>
        <p className={style.list}>
            {props.diets ? props.diets.map(diet => <span key={diet} className={style.text}> ▫️ {diet} </span> ) : null} 
        </p>
        <h6><NavLink to={`/app/recipes/${props.id}`} className={style.link}>➡️ Click for details!</NavLink></h6>  
        
    </div>
)
}

export default Card;