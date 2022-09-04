
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Componentes/pages/Inicio';
import Detail from "./Componentes/pages/Detail"
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import CartProvider from './Componentes/Context/CartContext';
import Cart from './Componentes/Cart/Cart';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className='container'>

          <NavBar />
          <Routes>

            <Route path="/" element={<Inicio />} />
            <Route path="/productos/:id" element={<Detail />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/Categoria/:cat" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>ERROR 404 - Pagina no encontrada</h1>} />

          </Routes>
          <Footer />

        </div>

      </BrowserRouter>
    </CartProvider>


  );
}

export default App;
