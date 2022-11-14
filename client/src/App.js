import './App.css';
import { Route } from "react-router-dom";
import Cards from '../src/Components/Cards.jsx' ;
import CardDetail from '../src/Components/CardDetail.jsx' ;
import Nav from '../src/Components/Nav.jsx' ;
import Form from '../src/Components/Form.jsx' ;
import Sorter from '../src/Components/Sorter.jsx' ;
import Filter from '../src/Components/Filter.jsx' ;
import Page from '../src/Components/Page.jsx' ;


function App() {
  return (
    <div className="App">

      <h1>Henry Food</h1>

      <Route path={'/'} component={Nav} />

      {/* <Route exact path={'/'} >
      <Sorter />
      <Filter />
      <Page />
      </Route> */}

      <Route exact path={'/'} component={Cards} />

      {/* <Route exact path={'/:page'} >
      <Sorter />
      <Filter />
      <Page />
      </Route> */}
      
      <Route exact path={'/:page'} component={Cards} />
      
        
      <Route exact path={'/recipes/:id'} component={CardDetail} />

      <Route exact path={'/recipe/create'} component={Form} />

    </div>
  );
}

export default App;
