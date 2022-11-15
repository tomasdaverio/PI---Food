import React, { useState } from 'react' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { orderCreator } from '../Redux/actions.js' ;
import {ORDER_BY_HEALTHSCORE_ASC, ORDER_BY_HEALTHSCORE_DESC, ORDER_BY_AZ,ORDER_BY_ZA} from '../Redux/actiontypes.js' ;
import style from '../Styles/Sorter.module.css' ;
import { NavLink } from 'react-router-dom' ;

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
        <div className={style.sort}>

          <form onSubmit={submitHandler} onChange={changeHandler}>
          <label className={style.sep} htmlFor="order">Order From:</label>
          <select className={style.sep} name="order" id="order">
          <option value={ORDER_BY_AZ} disabled selected hidden>Choose an Order</option>
          <option value={ORDER_BY_AZ}>A to Z</option>
          <option value={ORDER_BY_ZA}>Z to A</option>
          <option value={ORDER_BY_HEALTHSCORE_DESC}> More Healthy to Less Healthy</option>
          <option value={ORDER_BY_HEALTHSCORE_ASC}>Less Healthy to More Healthy</option>
          </select>
         <input className={style.sep} type="submit" value="Apply" disabled={(recipes.length && order) ? false : true} />
          </form>
         <NavLink to={'/app/1'}><span id='elementID'></span></NavLink>
        </div>
        )

    } else { return(null) }
}

export default Sorter ;


