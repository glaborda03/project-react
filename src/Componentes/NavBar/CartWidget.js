
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import './NavBar.css'
import React, { useContext } from "react";
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
    const {totalProd } = useContext(CartContext);
    return (
        <div className="cartWidgetCantidad">
           {totalProd !==0 && <p>{totalProd}</p> } 
            <p className="cartWidget">
                <FontAwesomeIcon icon={faCartShopping} />
            </p>
            
        </div>
    )
}

export default CartWidget