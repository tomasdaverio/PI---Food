import React from 'react' ;
import { Link } from 'react-router-dom' ;
import style from '../Styles/Card.module.css' ;

function Card (props){
return(
    <div className={style.cardcontainer}>
        <h2>{props.name}</h2>
        <h3>Diets:{props.diets.length ? props.diets.map(diet => <span>- {diet} </span> ) : <span>-</span>}</h3>
        <img alt='img' src={props.image}/>
        <p className={style.button}><Link to={`/recipes/${props.id}`}>View Details</Link></p>  
        
    </div>
)
}

export default Card;