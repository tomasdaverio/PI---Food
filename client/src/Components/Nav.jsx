import React from 'react' ;
import { Link } from 'react-router-dom' ;

function Nav (){
    return(
        <div>
            <span><Link to={'/'}>HOME</Link></span>
            <span><Link to={'/create'}>Create your own Recipe!</Link></span>
        </div>
    )
}

export default Nav ;