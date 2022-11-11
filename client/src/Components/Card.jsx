import React from 'react' ;
import { Link } from 'react-router-dom' ;

function Card (props){
return(
    <div>
        <h1>Title:<Link to={`/recipes/${props.id}`}>{props.name}</Link></h1>
        <h3>Diets:{props.diets.length ? props.diets.map(diet => <span>- {diet} </span> ) : <span>-</span>}</h3>
        <img alt='img' src={props.image}/>
        
    </div>
)
}

export default Card;