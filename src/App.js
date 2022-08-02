
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='container'>

      <NavBar />
      
      {/* <div className='mainContainer'>
        <ItemListContainer Titulo = "Productos" />
      </div> */}

      <div>
        <ItemDetailContainer />

      </div>      
    </div>

      
    
  );
}

export default App;
