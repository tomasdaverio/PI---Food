import './App.css';
import { Route } from "react-router-dom";
import Cards from '../src/Components/Cards.jsx' ;
import CardDetail from '../src/Components/CardDetail.jsx' ;
import Nav from '../src/Components/Nav.jsx' ;
import Form from '../src/Components/Form.jsx' ;



function App() {
  return (
    <div className="App">

      <h1>Henry Food</h1>

      <Route path={'/'} component={Nav} />

      <Route exact path={'/'} component={Cards} />
      
      <Route exact path={'/:page'} component={Cards} />
              
      <Route exact path={'/recipes/:id'} component={CardDetail} />

      <Route exact path={'/recipe/create'} component={Form} />

    </div>
  );
}

export default App;
