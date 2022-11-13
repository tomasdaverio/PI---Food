import React , { useState } from "react";
import { addRecipe } from '../Redux/actions.js' ;
import { useDispatch } from 'react-redux' ;

const dietset = [
    'gluten free',
    'dairy free',
    'lacto ovo vegetarian',
    'vegan',
    'paleolithic',
    'primal',
    'whole 30',
    'pescatarian',
    'ketogenic',
    'fodmap friendly',
    'vegetarian'
  ] 

export const Form = (props) => {

  const dispatch = useDispatch();
  

  const [recipe,setRecipe] = useState({
    name: "" ,
   summary: "" ,
    hscore: 50,
    steps: "" ,
    image: "",
    dishTypes: [],
    diets:[]
  })

  const [error,setError] = useState({
    name: "" ,
   summary: "" ,
    hscore: "",
    steps: "" ,
    image: "",
    dishTypes: []
  })

  const validate = (input) => {
    const value = input.trim() ;
    
    if(! (/^[A-Z ]+$/i.test(value.name))) setError({...error,name:'Name is mandatory field. It can only be composed by letters.'})
    if(! (/^[A-Z ]+$/i.test(value.summary))) setError({...error,summary:'Summary is mandatory field. It can only be composed by letters.'})
   return error;
  }

  const changeHandler = (e) => {
    const property = e.target.name ; 
    const value = e.target.value ; 
    const checked = e.target.checked ; 
        
    if(property !== 'diets') setRecipe({...recipe,[property]:value}) ;
    if(property === 'diets' && checked === true) setRecipe({...recipe,diets:[...recipe.diets,value]}) ;
    if(property === 'diets' && checked === false) setRecipe({...recipe,diets: recipe.diets.filter( r => r !== value)}) ;
    return
    // aca deberia hacer la validacion y setear el error. y el boton submit estar ligado al error.
  }


  const submitHandler=(event)=>{
    event.preventDefault();
    dispatch(addRecipe(recipe)) ; 
}

  return (
    <div>
         <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={recipe.name} onChange={changeHandler}></input>

                <label htmlFor="summary">Summary: </label>
                <input type="text" name="summary" id="summary" value={recipe.summary} onChange={changeHandler}></input>

                <label htmlFor="hscore">Health Score: </label>
                <input type="number" name="hscore" id="hscore" value={recipe.hscore} onChange={changeHandler}></input>

                <label htmlFor="steps">Steps: </label>
                <input type="text" name="steps" id="steps" value={recipe.steps} onChange={changeHandler}></input> 

                <label htmlFor="image">URL image: </label>
                <input type="text" name="image" id="image" value={recipe.image} onChange={changeHandler}></input> 

                <label htmlFor="dishTypes">Dish Types: </label>
                <input type="text" name="dishTypes" id="dishTypes" value={recipe.dishTypes} onChange={changeHandler}></input> 

                <fieldset onChange={changeHandler}>
                 <legend>Kind of diets related. If you are not sure or you are not professional in this subject, skip this step:</legend>
                 {dietset.map( diet => { return (
                   <div>
                   <input type="checkbox" id={diet} name="diets" value={diet} />
                   <label htmlFor={diet}>{diet}</label>
                   </div>
                )})}
                </fieldset>

                <button type="submit" disabled={recipe.name && recipe.summary }>Create</button>           
        
          </form>
    
    </div>
          );
};

export default Form;
