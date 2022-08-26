import './Modal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";

const Modal = ({title, close, children}) => {
    return(
        <div className="modal">
            <h2>{title}</h2>
            {children}
            <p className='iconoClose'>
                <FontAwesomeIcon icon={faTimesSquare} onClick = {() =>close(false)}/>
            </p>
            
        </div>
    )
}

export default Modal