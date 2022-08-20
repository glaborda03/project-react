
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Componentes/pages/Contacto';
import Inicio from './Componentes/pages/Inicio';
import Detail from "./Componentes/pages/Detail"
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import CartProvider from './Componentes/Context/CartContext';
import Cart from './Componentes/Cart/Cart';

function App() {
  return (
    <CartProvider>
    <div className='container'>


      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path="/" element={<Inicio/>} />
          <Route path="/productos/:id" element={<Detail/>} />
          <Route path="/productos" element={<ItemListContainer/>} />
          <Route path="/Categoria/:cat" element={<ItemListContainer/>} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart/>} />
          
        </Routes>
      </BrowserRouter>

    </div>
    </CartProvider>


  );
}

export default App;
