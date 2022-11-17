import './App.css';
import { Route } from "react-router-dom";
import Cards from '../src/Components/Cards/Cards.jsx' ;
import CardDetail from '../src/Components/CardDetail/CardDetail.jsx' ;
import Nav from '../src/Components/Nav/Nav.jsx' ;
import Form from '../src/Components/Form/Form.jsx' ;
import Landing from '../src/Components/Landing/Landing.jsx' ;
import About from '../src/Components/About/About.jsx' ;
import SearchBar from '../src/Components/SearchBar/SearchBar.jsx' ;



function App() {
  return (
    <div className="App">

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
