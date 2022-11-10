import React from 'react' ;
import { Link } from 'react-router-dom' ;

function Nav (){
    return(
        <div>
            <a><Link to={'/'}>HOME</Link></a>
            <a><Link to={'/create'}>Create your own Recipe!</Link></a>
        </div>
    )
}

export default Nav ;