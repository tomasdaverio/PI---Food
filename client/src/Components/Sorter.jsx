import React, { useState } from 'react' ;
import { connect } from "react-redux" ;
import { orderByAZASC, orderByAZDESC , orderbyHealthScoreASC,orderbyHealthScoreDESC } from '../Redux/actions.js' ;

function Sorter (props){

    const [state,setState] = useState(null) ;
    

    const changeHandler = (event) => {
        setState(event.target.value) ;
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        alert(state)
    }

    return(
        <div>

            <form onSubmit={submitHandler} onChange={changeHandler}>
            <p> <span>Select which to see first:</span><br></br>
            <input type="radio" id="AZ" name="Order" value="AZ"></input>
            <label htmlFor="AZ"> A-Z </label>
            <input type="radio" id="ZA" name="Order" value="ZA" ></input>
            <label htmlFor="ZA"> Z-A </label>
        
            <input type="radio" id="ASC" name="Order" value="ASC"></input>
            <label htmlFor="ASC"> - Healthy </label>
            <input type="radio" id="DESC" name="Order" value="DESC" ></input>
            <label htmlFor="DESC"> + Healthy</label>
            <input type="submit" value="Apply"></input>
            </p>
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


