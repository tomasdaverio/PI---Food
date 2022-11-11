import React, { useState } from 'react' ;
import { connect, useDispatch , useSelector } from "react-redux" ;
import { orderByAZASC, orderByAZDESC , orderbyHealthScoreASC,orderbyHealthScoreDESC } from '../Redux/actions.js' ;


function Sorter (props){
   
    const dispatch = useDispatch() ;

    const [state,setState] = useState(null) ;

    const recipes = useSelector((state) => state.recipes) ;

    const changeHandler = (event) => {
        const value = event.target.value ;
        setState(value) ;
        console.log(value)

    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        switch(state){
            case 'AZ' : {dispatch(props.orderByAZASC()) ; return }
            case 'ZA' : {dispatch(props.orderByAZDESC()) ; return}
            case 'ASC' : {dispatch(props.orderbyHealthScoreASC()) ; return}
            case 'DESC' : {dispatch(props.orderbyHealthScoreDESC()) ; return}
            default: {dispatch(props.orderByAZASC()) ; return}
        }
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
            <input type="submit" value="Apply" disabled={(recipes.length && state) ? false : true}></input>
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


