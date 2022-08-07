import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const { titulo, imagen, precio, stock, Id } = data


    return (
         <Link style={{ textDecoration: "none", color: 'black' }} to={`/productos/${Id}`} >
            <div className="itemProducts">
                <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
                <p>{titulo}</p>
                <span>$ {precio}</span>
                <button>Agregar al carrito</button>
                <ItemCount stock={stock} />
                <p>Stock: {stock}</p>
                
            </div>
        </Link>
    )


}

export default Item