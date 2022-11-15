import React from 'react' ;
import { NavLink , Link } from 'react-router-dom' ;
import style from '../Styles/Card.module.css' ;
import { imgdefault } from '../resources/resources.js' ;

function Card (props){
return(
    <div className={style.cardcontainer}>
        <a href={`http://localhost:3000/app/recipes/${props.id}`} title="Details">
        <img alt='img' src={props.image ? props.image : imgdefault}/>
        </a>
        <h2><NavLink to={`/app/recipes/${props.id}`} className={style.title}>{props.name}</NavLink></h2>
        
        <p className={style.list}>
            <span><b>Diets:</b></span>
            <br></br>
            {props.diets ? props.diets.map(diet => <span className={style.text}> - {diet} </span> ) : null}
            
        </p>
        <h6><NavLink to={`/app/recipes/${props.id}`} className={style.link}>Click for details!</NavLink></h6>  
        
    </div>
)
}

export default Card;