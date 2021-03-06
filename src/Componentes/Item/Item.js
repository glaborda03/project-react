import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"

const Item = ({ data }) => {
    const { titulo, imagen, precio, stock } = data


    return (

        <div className="itemProducts">
            <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
            <p>{titulo}</p>
            <span>$ {precio}</span>
            <ItemCount stock={stock} />
            <p>Stock: {stock}</p>
            <button>Agregar al carrito</button>
        </div>
    )


}

export default Item