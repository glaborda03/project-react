import { useState, useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "./ItemCount.css"



const ItemCount = ({ stock, cantidadCompra, products }) => {
    let stock1 = stock
    const [contador, setContador] = useState(1)
    const {addToCart} = useContext(CartContext);


    const addNumber = () => {
        if (contador < stock1) {
            setContador(contador + 1)
        }

    }
    const restNumber = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const onAdd = () =>{
       cantidadCompra(contador)
       addToCart({...products, contador});
    };

   

    return (

        <>
            <div className="contadorProductos">
                <button onClick={restNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
    )
}



export default ItemCount