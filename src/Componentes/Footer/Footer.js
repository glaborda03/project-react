import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

const Footer = () =>{
    return(

        <div className="containerFooter">
            <Link to="/"><img src="./assets/Pupperinalogo.png" width="200px" height="200px" className="NavBarLogo" alt='Imagen logo' /></Link>
                <div>
                    <h2>CONTACTO</h2>
                    <p>Cel: 099123456</p>
                    <p>Email: pupperina@gmail.com</p>
                    <p>Dir: Av. Rivera 2089</p>
                </div>
                <div>
                    <h2>REDES</h2>
                    <a target="blank_" href="https://www.instagram.com/pupperina.uy/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a target="blank_" href="https://es-la.facebook.com/pages/category/Pet-Supplies/Pupperinauy-1838769206168144/"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            <p>© 2022 Copyright - glaborda03</p>
        </div>

    )
}

export default Footer