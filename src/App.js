
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Componentes/pages/Contacto';
import Inicio from './Componentes/pages/Inicio';
import Detail from "./Componentes/pages/Detail"
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='container'>


      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/" element={<Inicio/>} />
          <Route path="/productos/:id" element={<Detail/>} />
          <Route path="/Categoria/:cat" element={<ItemListContainer/>} />
          <Route path="/Contacto" element={<Contacto />} />
          
        </Routes>
      </BrowserRouter>

    </div>



  );
}

export default App;
