import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const { titulo, imagen, precio, stock, id } = data


    return (
        <Link style={{ textDecoration: "none", color: 'black' }} to={`/productos/${id}`} >
            <div className="itemProducts">
                <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
                <p>{titulo}</p>
                <span>$ {precio}</span>
                <ItemCount stock={stock} />
                <p>Stock: {stock}</p>
                <button>Agregar al carrito</button>
            </div>
        </Link>
    )


}

export default Item