import React from 'react' ;
import { connect } from "react-redux" ;
import { orderByAZASC, orderByAZDESC , orderbyHealthScoreASC,orderbyHealthScoreDESC } from '../Redux/actions.js' ;

function Sorter (props){

    return(
        <div>
            <form>
            <p>Suscribirse a las siguientes secciones:</p>
            <p><input type="checkbox" name="AZ">Order: A-Z</input></p>
            <p><input type="checkbox" name="ZA">Order: Z-A</input></p>
            <p><input type="checkbox" name="scoreASC">Order by Health Score - ASC</input></p>
            <p><input type="checkbox" name="scoreDESC">Order by Health Score - DESC</input></p>
            </form>	
        </div>
    )
}

const mapDispatchToProps = {
   orderByAZASC,
   orderByAZDESC,
   orderbyHealthScoreASC,
   orderbyHealthScoreDESC 
}

export default connect(null,mapDispatchToProps) (Sorter);


