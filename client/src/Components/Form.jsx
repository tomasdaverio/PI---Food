import React , { useState } from "react";
import { addRecipe } from '../Redux/actions.js' ;
import { useDispatch } from 'react-redux' ;
import { dietset } from '../resources/resources.js' ;
import style from '../Styles/Form.module.css' ;

export const Form = (props) => {

  const dispatch = useDispatch();
  

  const [recipe,setRecipe] = useState({
    name: "" ,
   summary: "" ,
    hscore: 50,
    instructions: "" ,
    diets:[]
  })

  const [error,setError] = useState({
    name: "" , //que no este vacio, que no contenga simbolos.
   summary: "" , //que no este vacio, que no contenga simbolos.
    hscore: "", //que no este vacio, que este entre 0 y 100 aclarando el criterio.
    instructions: "" ,
    diets: ""
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
    <div className={style.form}>
      <h1>Create your own Recipe!</h1>
         <form id='form' onSubmit={submitHandler}>
          
                <label htmlFor="name">Recipe Name: </label>
                <input type="text" name="name" id="name" value={recipe.name} onChange={changeHandler}></input>
                <br></br>
                <br></br>
                <label htmlFor="summary">Summary: </label>
                <input 
                type="text" 
                name="summary" 
                id="summary" 
                placeholder="Brief description"
                value={recipe.summary} 
                onChange={changeHandler}>
                </input>
                <br></br>
                <br></br>
                <label htmlFor="hscore">Health Score: </label>
                <input 
                type="number"
                placeholder="0 to 100"
                name="hscore"
                id="hscore"
                value={recipe.hscore} 
                onChange={changeHandler}>
                </input>
                <p>Health Score: 100 is the healthiest recipe and 0 is the least healthy</p>
                <br></br>
                <br></br>
                <label htmlFor="instructions">Steps: </label>
                <br></br>
                <textarea 
                placeholder="Input the summarized instructions for preparing the recipe (Limit: 50 words)"
                wrap="hard"
                name="instructions"
                id="instructions"
                maxlenght='300'
                form='form'
                value={recipe.instructions}
                rows='10'
                cols='50'
                onChange={changeHandler}>
                </textarea>
                <br></br>
                <br></br>
                <fieldset onChange={changeHandler}>
                 <legend>Kind of diets related. If you are not sure, skip this:</legend>
                 {dietset.map( diet => { return (
                   <div>
                   <input type="checkbox" id={diet} name="diets" value={diet} />
                   <label htmlFor={diet}>{diet}</label>
                   </div>
                )})}
                </fieldset>
                <br></br>
                <button type="submit" disabled={recipe.name && recipe.summary }>Create</button>           
        
          </form>
    
    </div>
          );
};

export default Form;
