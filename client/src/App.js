import './App.css';
import { Route } from "react-router-dom";
import Cards from '../src/Components/Cards.jsx' ;
import CardDetail from '../src/Components/CardDetail.jsx' ;
import Nav from '../src/Components/Nav.jsx' ;
import Form from '../src/Components/Form.jsx' ;
import Landing from '../src/Components/Landing.jsx' ;
import About from '../src/Components/About.jsx' ;
import SearchBar from '../src/Components/SearchBar.jsx' ;



function App() {
  return (
    <div className="App">

      <h1>Henry Food</h1>

      <Route exact path={'/'} component={Landing} />

      <Route path={'/app'} component={Nav} />
      <Route exact path={'/app'} component={SearchBar} />
      <Route exact path={'/app'} component={Cards} />
      
      
      <Route exact path={'/app/:page'} component={SearchBar} />
      <Route exact path={'/app/:page'} component={Cards} />

              
      <Route exact path={'/app/recipes/:id'} component={CardDetail} />

      <Route exact path={'/app/recipe/create'} component={Form} />

      <Route exact path={'/app/recipe/about'} component={About} />

    </div>
  );
}

export default App;
