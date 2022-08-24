import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const { titulo, imagen, precio, stock, Id } = data


    return (
         
            <div className="itemProducts">
                <Link style={{ textDecoration: "none", color: 'black', marginBottom: '2rem' }}  to={`/productos/${Id}`}>
                    <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
                    <p>{titulo}</p>
                    <span className="itemProductPrecio"> Precio $ {precio}</span>
                </Link>
                {/* <ItemCount stock={stock} />
                <p>Stock: {stock}</p> */}
                
            </div>
        
    )


}
 

export default Item