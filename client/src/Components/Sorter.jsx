import React, { useState } from 'react' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { orderCreator } from '../Redux/actions.js' ;
import {ORDER_BY_HEALTHSCORE_ASC, ORDER_BY_HEALTHSCORE_DESC, ORDER_BY_AZ,ORDER_BY_ZA} from '../Redux/actiontypes.js' ;


 function Sorter (props){
   
    const dispatch = useDispatch() ;

    let [order,setOrder] = useState(ORDER_BY_AZ) ;

    let recipes = useSelector((state) => state.recipes) ;

    const changeHandler = (event) => {
      setOrder(event.target.value) ;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(orderCreator(order)) ;
    }

    if(recipes.length){

    return(
        <div>

            <form onSubmit={submitHandler} onChange={changeHandler}>
            <p><span>Select which to see first:</span><br></br>
            <input type="radio" id="AZ" name="Order" value={ORDER_BY_AZ}></input>
            <label htmlFor="AZ"> A-Z </label>
            <input type="radio" id="ZA" name="Order" value={ORDER_BY_ZA} ></input>
            <label htmlFor="ZA"> Z-A </label>
        
            <input type="radio" id="ASC" name="Order" value={ORDER_BY_HEALTHSCORE_ASC}></input>
            <label htmlFor="ASC"> - Healthy </label>
            <input type="radio" id="DESC" name="Order" value={ORDER_BY_HEALTHSCORE_DESC} ></input>
            <label htmlFor="DESC"> + Healthy</label>
            <input type="submit" value="Apply" disabled={(recipes.length && order) ? false : true}></input>
            </p>
            </form>	

        </div>
        )
    } else {
        return(
            null
        )
    }
}

export default Sorter ;


