import React , { useState } from "react";
import { addRecipe } from '../Redux/actions.js' ;
import { dietset } from '../resources/resources.js' ;
import style from '../Styles/Form.module.css' ;
import { useDispatch } from 'react-redux' ;

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
    name: "" , //que no este vacio, que no contenga simbolos.
   summary: "" , //que no este vacio, que no contenga simbolos.
    hscore: "", //que no este vacio, que este entre 0 y 100 aclarando el criterio.
    instructions: "" 
  })

  const validate = (input) => {
    const value = input.trim() ;
    return /^[A-Z ]+$/i.test(value)
  }

  const validateNum = (input) => {
    const value = input.trim() ;
    return /^[0-9 ]+$/i.test(value)
  }



  const changeHandler = (e) => {
    const property = e.target.name ; 
    const value = (property === 'hscore' ? Number(e.target.value) : e.target.value ); 
    const checked = e.target.checked ; 
        
    if(property !== 'diets') setRecipe({...recipe,[property]:value}) ;
    if(property === 'diets' && checked === true) setRecipe({...recipe,diets:[...recipe.diets,value]}) ;
    if(property === 'diets' && checked === false) setRecipe({...recipe,diets: recipe.diets.filter( r => r !== value)}) ;
   
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
        console.log(property,value,typeof value)
        if (value >=0 && value <=100 && typeof value === 'number' && Number.isInteger(value)){
          setError({...error,[property]:""})
        } else {
          setError({...error,[property]:`${property}  must be an entire number between 0 and 100.`})
        }
        break;
    }
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    dispatch(addRecipe(recipe)) ; 
    alert('Recipe Created! :)')
}

 return (
    <div className={style.form}>
      <h1>Create your own Recipe!</h1>
         <form id='form' onSubmit={submitHandler}>
          
                <label htmlFor="name">Recipe Name: 
                <br />
                <input className={error.name && style.errorborder} type="text" name="name" id="name" value={recipe.name} onChange={changeHandler} />
                </label>
                <br />
                <text className={style.error}>{error.name}</text>

                <br />
                <br />

                <label htmlFor="summary">Summary: 
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
                <text className={style.error}>{error.summary}</text>
                
                <br />
                <br />

                <label htmlFor="hscore">Health Score: 
                <br />
                <input 
                className={error.hscore && style.errorborder}
                type="text"
                placeholder="Entire from 0 to 100"
                name="hscore"
                id="hscore"
                value={recipe.hscore} 
                onChange={changeHandler}
                />
                </label>
                <br />
                <text className={style.error}>{error.hscore}</text>

                <br />
                <br />

                <label htmlFor="instructions" > Instructions: 
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
                <text className={style.error}>{error.instructions}</text>

                <br />
                <br />

                <fieldset onChange={changeHandler}>
                <legend>Suitable Diets: If you are not sure, skip this step:</legend>
                {dietset.map( diet => { return (
                <div>
                <input type="checkbox" id={diet} name="diets" value={diet} />
                <label htmlFor={diet}>{diet}</label>
                </div>
                )})}
                </fieldset>
                
                <br />
                <button className={style.button} 
                type="submit"
                disabled={(!error.name && !error.summary && !error.hscore) && !error.instructions ? false : true }>Create</button>           
        
          </form>
    
    </div>
          );
};

export default Form;
