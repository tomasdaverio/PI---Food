import React, { Component } from 'react' ;
import { getRecipeByName } from '../Redux/actions.js' ;
import { connect } from "react-redux";

class Buscador extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            recipe: "" ,
            button: true
          };
        
          this.handleSubmit = (event) => {
            event.preventDefault();
            this.props.getRecipeByName(this.state.recipe.trim())
           }

          this.validate = (input) => {
            const value = input.trim() ;
            if(value.length<=2) return false ; 
            return /^[A-Z ]+$/i.test(value) ;
          }

          this.handleChange = (event) => {
            const value = event.target.value ; 
            this.setState({button: ! this.validate(value)}) ;
            this.setState({recipe: value}) ;
          }
    }
    render() {
        let {button,recipe} = this.state ;
        return (
            <>
            <ul>
                <li>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Recipe Searcher: </label>
                <input 
                name="search" 
                type="text" 
                id="1" 
                placeholder="Type a recipe name"
                value={recipe}
                onChange={this.handleChange}
                >
                </input>
                <button
                disabled = {button} 
                type="submit" 
                name="submit"
                >
                Let's search!
                </button>
                </form>
               </li>
                <li>{ (recipe ? true : null) && button && "Not valid"}</li>
                <li> { (recipe ? true : null) && button && "Allowed: (Aa-Zz) | Not Allowed: (0-9)(/%$&#]}{})"} </li>
                <li>{ (recipe ? true : null) && button && "I.E: Valid: Rice, Hamburguer, etc. - Not valid: Rice8, Rice*"}</li>         
            </ul>           
            </>
        )
    }
}


export const mapDispatchToProps = (dispatch) => {
    return{
        getRecipeByName: (recipe) => {dispatch(getRecipeByName(recipe))}
    }
};

export default connect(null,mapDispatchToProps) (Buscador);

