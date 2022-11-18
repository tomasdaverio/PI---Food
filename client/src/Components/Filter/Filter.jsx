import React, { useState } from 'react' ;
import { useSelector , useDispatch } from 'react-redux' ;
import { filterByDiet , removefilter } from '../../Redux/actions.js' ;
import { dietset } from '../../resources/resources.js' ;
import style from './Filter.module.css' ;
import { NavLink } from 'react-router-dom' ;

function Filter(props){

let recipes = useSelector( (state) => state.recipes ) ;
let filterApplied = useSelector( (state) => state.filterApplied) ;
let filtered = useSelector( (state) => state.filteredRecipes) ;

const dispatch = useDispatch() ;

const [filter,setFilter] = useState(null) ;

const changeHandler = (event) => {
    const value = event.target.value ;
    setFilter(value) ;
}

const submitHandler = (event) => {
    event.preventDefault();
    dispatch(filterByDiet(filter)) ;
    }

const cleanFilt = () => {
    dispatch(removefilter()) ;
    document.getElementById('elementDI').click() ;
}

if(recipes.length){
    return (
        <div>
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
          
        </div>
        
        <div className={style.filtapplied}>
            <span>{`Filter Applied: ${filterApplied}`}</span>
            { filterApplied !== 'None' ?
            <button className={style.buttonRem} type='button' onClick={cleanFilt}>X</button>
            :null
            }
        </div>
      
        </div>
    )
} else {
    return(null)      
}
}

export default Filter ;