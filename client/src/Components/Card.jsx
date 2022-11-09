import React from 'react' ;
import { Link } from 'react-router-dom' ;

function Card (props){
return(
    <div>
        <h1>Title:<Link to={`/recipes/${props.id}`}>{props.name}</Link></h1>
        <h4>Diets:{props.diets.map(diet => <a>{diet}, </a>)}</h4>
        
        <img alt='img' src={props.image}/>
        
    </div>
)
}

export default Card;