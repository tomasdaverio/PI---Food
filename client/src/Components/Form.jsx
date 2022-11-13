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
    name: "is mandatory field" , //que no este vacio, que no contenga simbolos.
   summary: "is mandatory field" , //que no este vacio, que no contenga simbolos.
    hscore: "", //que no este vacio, que este entre 0 y 100 aclarando el criterio.
    instructions: "" 
  })

  const validate = (input) => {
    const value = input.trim() ;
    return /^[A-Z ]+$/i.test(value)
  }

  const changeHandler = (e) => {
    const property = e.target.name ; 
    const value = e.target.value ; 
    const checked = e.target.checked ; 
        
    if(property !== 'diets') setRecipe({...recipe,[property]:value}) ;
    if(property === 'diets' && checked === true) setRecipe({...recipe,diets:[...recipe.diets,value]}) ;
    if(property === 'diets' && checked === false) setRecipe({...recipe,diets: recipe.diets.filter( r => r !== value)}) ;
   
    // aca deberia hacer la validacion y setear el error. y el boton submit estar ligado al error.

    switch(property){
      case 'name':
        if (!value.length) {
          setError({...error,[property]:`${property} is mandatory field`})
        } else if(validate(value)){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property} can only be composed by letters(a,b,..,z).`})
        }
        break;
      case 'summary':
        if (!value.length) {
          setError({...error,[property]:`${property} is mandatory field`})
        } else if(value.length<500){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property} have a maximum length of 500 characters`})
        }
        break;
      case 'instructions':
        if (value.length<500){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property} have a maximum length of 500 characters`})
        }
        break;
      case 'hscore':
        if (value >=0 && value <=100){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property}  must be a number between 0 and 100.`})
        }
        break;
    }
   
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
                <br></br>
                <input type="text" name="name" id="name" value={recipe.name} onChange={changeHandler}></input>
                <br></br>
                <br></br>
                <label htmlFor="summary">Summary: </label>
                <br></br>
                <textarea 
                placeholder="Brief description of the recipe (Limit: 50 words)"
                wrap="hard"
                name="summary"
                id="summary"
                maxlenght='300'
                form='form'
                value={recipe.summary}
                rows='10'
                cols='50'
                onChange={changeHandler}>
                </textarea>
                <br></br>
                <label htmlFor="hscore">Health Score: </label>
                <br></br>
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
                <label htmlFor="instructions">Instructions: </label>
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
