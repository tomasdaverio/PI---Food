import React, { Component } from 'react' ;
import { getRecipeByName } from '../Redux/actions.js' ;
import { connect } from "react-redux";

class Buscador extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            recipe: "" ,
            button: true,
            reason: ""
          };
        
          this.handleSubmit = (event) => {
            event.preventDefault();
            this.props.getRecipeByName(this.cleanInput(this.state.recipe))
           }

          this.validate = (input) => {
            if(input.length<=2) return true ; 
            return ! /^[A-Z ]+$/i.test(input)
            
          }

          this.cleanInput = (input) => {
            let start = 0 ;
            let end = null;
            for(let i=0 ; i < input.length ; i++ ){
                if(input[i]!==" ") {
                    start = i ;
                    break;
                }
            }
            for(let i=input.length-1 ; i >=0 ; i-- ){
                if(input[i]!==" ") {
                    end = i+1 ;
                    break;
                }
            }
            return input.slice(start,end)
          }

          this.handleChange = (event) => {
            const value = event.target.value ; 
            this.setState({button: this.validate(value)}) ;
            this.setState({recipe: value}) ;
          }
    }
    render() {
        let {button,recipe,reason} = this.state ;
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
                Let's Search
                </button>
                </form>
               </li>
                <li>{button && "Invalid"}</li>
                <li> {button && "Only letters: (a-z) | Not Allowed: 0-9/%$&#,etc"}  </li>
                <li>{button && "Examples of valid searchs: Rice, Hamburguer, etc."}</li>
                
                
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
