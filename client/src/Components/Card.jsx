import React from 'react' ;
import { Link } from 'react-router-dom' ;

function Card (props){
return(
    <div>
        <h1>Title:<Link to={`/recipes/${props.id}`}>{props.name}</Link></h1>
        <p>Diets:{props.diets.map(diet => - {diet} )}</p>
        <img alt='img' src={props.image}/>
        
    </div>
)
}

export default Card;