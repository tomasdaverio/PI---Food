import './App.css';
import { Route } from "react-router-dom";
import Buscador from '../src/Components/Buscador.jsx' ;
import Cards from '../src/Components/Cards.jsx' ;
import CardDetail from '../src/Components/CardDetail.jsx' ;
import Nav from '../src/Components/Nav.jsx' ;
import Form from '../src/Components/Form.jsx' ;
import Sorter from '../src/Components/Sorter.jsx' ;

function App() {
  return (
    <div className="App">

      <h1>Henry Food</h1>

      <Route path={'/'} component={Nav} />

      <Route exact path={'/'} >
      <Buscador />
      <Sorter />
      <Cards />
      </Route>
   
      <Route exact path={'/recipes/:id'} component={CardDetail} />

      <Route exact path={'/create'} component={Form} />

    </div>
  );
}

export default App;
