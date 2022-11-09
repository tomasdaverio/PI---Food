import './App.css';
import Buscador from '../src/Components/Buscador.jsx'
import Cards from '../src/Components/Cards.jsx'

function App() {
  return (
    <div className="App">
      <h1>Henry Food</h1>
      <div>
      <Buscador />
      </div>
      <div>
      <Cards />
      </div>
    </div>
  );
}

export default App;
