import React from 'react' ;
import { NavLink } from 'react-router-dom' ;

function Landing (props){
    return(
    <h1>Welcome to <NavLink to={'/app'}>Henry Food</NavLink></h1>
    )
   
}


export default Landing ;