import React from 'react' ;

function Card (props){
return(
    <div>
        <h1>Title: {props.name}</h1>
        <h4>Diets: {props.diets}</h4>
        <img alt='img' src={props.image}/>
        
    </div>
)
}

export default Card;