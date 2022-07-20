import './NavBar.css'


const NavBar = ()=> {
    return(

      <div className="containerNav">
        <img src="./assets/Pupperina logo.png" width="200px" height="200px" className="NavBarLogo" />
        <ul className='containerList'>
            <li><button> Inicio</button></li>
            <li><button> Nosotros</button></li>
            <li><button> Productos</button></li>
            <li><button> Contacto</button></li>
        </ul>
      </div>
    )
}

export default NavBar