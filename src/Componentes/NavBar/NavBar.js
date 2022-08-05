import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = ()=> {
    return(

      <div className="containerNav">
        <Link to="/"><img src="./assets/Pupperina logo.png" width="200px" height="200px" className="NavBarLogo" alt='Imagen logo' /></Link>
        <ul className='containerList'>
            <Link to="/"><li><button> INICIO</button></li></Link>
            <Link to="/Categoria/:categoryid"><li><button> ALIMENTOS</button></li></Link>
            <Link to="/Categoria/:categoryid"><li><button> ACCESORIOS</button></li></Link>
            <Link to="/Contacto"><li><button> CONTACTO</button></li></Link>
        </ul>
        <CartWidget />
      </div>
    )
}

export default NavBar