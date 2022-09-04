import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = ()=> {
    return(

      <div className="containerNav">
        <Link to="/"><img src="./assets/Pupperinalogo.png" width="150px" height="150px" className="NavBarLogo" alt='Imagen logo' /></Link>
        <ul className='containerList'>
            <Link to="/"><li><button> INICIO</button></li></Link>
            <Link to="/Categoria/alimentos"><li><button> ALIMENTOS</button></li></Link>
            <Link to="/Categoria/accesorios"><li><button> ACCESORIOS</button></li></Link>
        </ul>
        <Link style={{textDecoration: "none", color:'black', display:'flex'}} to="/Cart">
          
            <CartWidget />
          
        </Link>
        
      </div>
    )
}

export default NavBar