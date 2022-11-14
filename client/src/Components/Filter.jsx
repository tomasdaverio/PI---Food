import React, { useState } from 'react' ;
import { useSelector , useDispatch } from 'react-redux' ;
import { filterByDiet , removefilter } from '../Redux/actions.js' ;
import { dietset } from '../resources/resources.js' ;
import style from '../Styles/Filter.module.css' ;

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

const removefilt = (event) => {
    event.preventDefault();
    console.log(removefilter())
    dispatch(removefilter()) ;
}

if(recipes.length){
    return (
        <div className={style.filt}>
            
          <form onSubmit={submitHandler} onChange={changeHandler}>
          <label className={style.sep} htmlFor="filter">Select a Diet Type: </label>
          <select className={style.sep} name="filter" id="filter">
          {dietset.map( diet => { return (
            <option value={diet}>{diet}</option>
          )})}
          </select>
          <input className={style.sep} type="submit" value="Apply" disabled={(recipes.length && filter) ? false : true}></input>
          </form>
            
          <button className={style.sep} type='button' onClick={removefilt}>remove filter</button>

        </div>
    )
} else {
    return(null)      
}
}

export default Filter ;