import './App.css';
import { Route } from "react-router-dom";
import Buscador from '../src/Components/Buscador.jsx' ;
import Cards from '../src/Components/Cards.jsx' ;
import CardDetail from '../src/Components/CardDetail.jsx' ;

function App() {
  return (
    <div className="App">

      <h1>Henry Food</h1>

      <Route exact path={"/"} >
      <Buscador />
      <Cards />
      </Route>
   
      <Route path={"/recipes/:id"} component={CardDetail} />

    </div>
  );
}

export default App;
