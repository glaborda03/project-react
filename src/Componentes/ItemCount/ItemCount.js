import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, cantidadCompra }) => {
    let stock1 = stock
    const [contador, setContador] = useState(1)


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
    }

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