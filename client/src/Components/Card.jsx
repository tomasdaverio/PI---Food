import React from 'react' ;
import { Link } from 'react-router-dom' ;
import style from '../Styles/Card.module.css' ;
import { imgdefault } from '../resources/resources.js' ;

function Card (props){
return(
    <div className={style.cardcontainer}>
        <img alt='img' src={props.image ? props.image : imgdefault}/>
        <h2>{props.name}</h2>
        <h4>Diets:</h4>
        <p>{props.diets ? props.diets.map(diet => <span> - {diet} </span> ) : null}</p>
        
        <p className={style.button}><Link to={`/recipes/${props.id}`}>View Details</Link></p>  
        
    </div>
)
}

export default Card;