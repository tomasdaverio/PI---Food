import React, { useState } from 'react' ;
import { useSelector , useDispatch } from 'react-redux' ;

import { filterByDiet , removefilter } from '../Redux/actions.js' ;

const dietset = [
    'gluten free',
    'dairy free',
    'lacto ovo vegetarian',
    'vegan',
    'paleolithic',
    'primal',
    'whole 360',
    'pescatarian',
    'ketogenic',
    'fodmap friendly',
    'vegetarian'
  ]


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
        <div>
            
            <form onSubmit={submitHandler} onChange={changeHandler}>
            <p><span>Filter by diet type:</span><br></br>
            {dietset.map( diet => { return (
            <span>
            <input type="radio" id={diet} name="Filter" value={diet}></input>
            <label htmlFor={diet}> {diet} </label>
            </span>
            )
            })}
            </p>
            <p>
            <input type="submit" value="Apply" disabled={(recipes.length && filter) ? false : true}></input>
            </p>
            </form>	
            <div>
            
            <button type='button' onClick={removefilt}>remove filter</button>
            
            </div>

        </div>
    )
} else {
    return(
        null
    )
        
}
}

export default Filter ;