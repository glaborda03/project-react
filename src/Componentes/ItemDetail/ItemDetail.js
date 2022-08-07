import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({ products }) => {
    const { titulo, imagen, precio, descripcion, stock } = products


    return (
        <div className="itemDetailCaja">
            <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
            <div className="itemDetail">
                <h1>{titulo}</h1>
                <h3>{descripcion}</h3>
                <p>Precio ${precio}</p>
                <ItemCount stock={stock} />
                <button>Comprar</button>
            </div>

        </div>
    
    )


}

export default ItemDetail