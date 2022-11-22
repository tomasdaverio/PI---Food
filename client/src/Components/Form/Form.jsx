import React , { useState } from "react";
import { addRecipe } from '../../Redux/actions.js' ;
import { dietset } from '../../resources/resources.js' ;
import style from './Form.module.css' ;
import { useDispatch } from 'react-redux' ;
import { NavLink } from 'react-router-dom' ;

export const Form = (props) => {

  const dispatch = useDispatch() ;

  const [recipe,setRecipe] = useState({
    name: "" ,
   summary: "" ,
    hscore: "",
    instructions: "" ,
    diets:[]
  })

  const [error,setError] = useState({
    name: "Mandatory field" ,                               //que no este vacio, que no contenga simbolos.
   summary: "Mandatory field" ,                             //que no este vacio, que no contenga simbolos.
    hscore: "",                                             //que este entre 0 y 100 aclarando el criterio.
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
    if(property === 'diets' && checked ) setRecipe({...recipe,diets:[...recipe.diets,value]}) ;
    if(property === 'diets' && !checked ) setRecipe({...recipe,diets: recipe.diets.filter( r => r !== value)}) ;
   
    // validaciones:

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
        } else if(value.length<=500){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property} have a maximum length of 500 characters`})
        }
        break;

      case 'instructions':
        if (value.length<=500){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property} have a maximum length of 500 characters`})
        }
        break;

      case 'hscore':
       let val = Number(value) ;
        if (val >=0 && val <=100 && typeof val === 'number' && Number.isInteger(val)){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property}  must be an entire number(0,1,2...,100) from 0 to 100.`})
        }
        break;
    }
  }

  const submitHandler=(event)=>{
    event.preventDefault();
   if(error.name || error.summary || error.hscore || error.instructions) {
      return alert('Missing or wrong fields.Check the red messages in each field');
    } else {
      dispatch(addRecipe(recipe)) ; 
}}

 return (
    <div className={style.form}>
      <h1>Create your own Recipe!</h1>
         <form id='form' onSubmit={submitHandler}>
          
                <label className={style.label} htmlFor="name">Recipe Name: 
                <br />
                <input className={error.name && style.errorborder} type="text" name="name" id="name" value={recipe.name} onChange={changeHandler} />
                </label>
                <br />
                <p className={style.error}>{error.name}</p>

                <label className={style.label} htmlFor="summary">Summary: 
                <br />
                <br />
                <textarea 
                className={error.summary && style.errorborder}
                placeholder="Brief description of the recipe (Limit: 500 characters)"
                wrap="hard"
                name="summary"
                id="summary"
                maxlenght='500'
                form='form'
                value={recipe.summary}
                rows='10'
                cols='50'
                onChange={changeHandler}
                >
                </textarea>
                </label>
                <br />
                <p className={style.error}>{error.summary}</p>
              
               <label className={style.label} htmlFor="hscore">Health Score: 
                <br />
                <p>(The higher, the healthier)</p>
                <input 
                className={error.hscore && style.errorborder}
                type="number"
                placeholder="Entire from 0 to 100"
                name="hscore"
                id="hscore"
                value={recipe.hscore} 
                onChange={changeHandler}
                />
                </label>
                <br />
                <p className={style.error}>{error.hscore}</p>

                <br />

                <label className={style.label} htmlFor="instructions" > Instructions: 
                <br />
                <br />
                <textarea 
                className={error.instructions && style.errorborder}
                placeholder="Input the summarized instructions for preparing the recipe (Limit: 500 characters)"
                wrap="hard"
                name="instructions"
                id="instructions"
                maxlenght='500'
                form='form'
                value={recipe.instructions}
                rows='10'
                cols='50'
                onChange={changeHandler}>
                </textarea>
                </label>
                <br />
                <p className={style.error}>{error.instructions}</p>

                <br />

                <fieldset onChange={changeHandler}>
                <legend className={style.label}>Suitable Diets: If you are not sure, skip this step:</legend>
                {dietset.map( diet => { return (
                <div key={diet}>
                <input type="checkbox" id={diet}  name="diets" value={diet} />
                <label htmlFor={diet}>{diet}</label>
                </div>
                )})}
                </fieldset>
                
                <br />
                <button className={style.button} 
                type="submit"
                // disabled={(!error.name && !error.summary && !error.hscore && !error.instructions) ? false : true }
                >Create</button>           
        
          </form>

          <p><NavLink className={style.goback} to={'/app'}>Go Back Home 🏚️</NavLink></p>
    
    </div>
          );
};

export default Form;
