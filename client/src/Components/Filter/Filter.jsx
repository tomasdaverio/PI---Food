import React, { useState } from 'react' ;
import { useSelector , useDispatch } from 'react-redux' ;
import { filterByDiet , removefilter } from '../../Redux/actions.js' ;
import { dietset } from '../../resources/resources.js' ;
import style from './Filter.module.css' ;
import { NavLink } from 'react-router-dom' ;

function Filter(props){

let recipes = useSelector( (state) => state.recipes ) ;

const dispatch = useDispatch() ;

const [filter,setFilter] = useState(null) ;

const changeHandler = (event) => {
    const value = event.target.value ;
    setFilter(value) ;
}

const submitHandler = (event) => {
    event.preventDefault();
    dispatch(filterByDiet(filter)) ;
    return ;
}

const cleanFilt = () => {
    dispatch(removefilter()) ;
    document.getElementById('elementDI').click() ;
}

if(recipes.length){
    return (
        <div className={style.filt}>
            
          <form onSubmit={submitHandler} onChange={changeHandler}>
          <label className={style.sep} htmlFor="filter">Select a Diet Type: </label>
          <select className={style.sep} name="filter" id="filter">
          <option value="" disabled selected hidden>Choose a Diet</option>
          {dietset.map( diet => { return (
            <option value={diet}>{diet}</option>
          )})}
          </select>
          <input className={style.sep} type="submit" value="Apply" disabled={(recipes.length && filter) ? false : true}></input>
          </form>
          <NavLink to={'/app/1'}><span id='elementDI'></span></NavLink> 
          <button className={style.sep} type='button' onClick={cleanFilt}>Remove Filter</button>
        </div>
       
    )
} else {
    return(null)      
}
}

export default Filter ;