
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className='container'>

      <NavBar />
      
      <div className='mainContainer'>
        <ItemListContainer Titulo = "Productos" />
      </div>

    </div>
    
  );
}

export default App;
