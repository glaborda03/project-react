import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"



const ItemDetail = ({ products }) => {
    const { titulo, imagen, precio, descripcion, stock } = products

    const [cantSelecionada, setCantidadSelecionada] = useState(0)


    return (
        <div className="itemDetailCaja">
            <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
            <div className="itemDetail">
                <h1>{titulo}</h1>
                <h3>{descripcion}</h3>
                <p>Precio ${precio}</p>
                <h3>Stock disponible: {stock}</h3>
                {
                    cantSelecionada > 1 ? <Link to="/Cart"><button>TERMINAR COMPRA</button></Link> : <ItemCount stock={stock} cantidadCompra={setCantidadSelecionada} />
                }
                
                
            </div>
        </div>
     
    )
   

}

export default ItemDetail