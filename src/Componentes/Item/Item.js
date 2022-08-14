import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const { titulo, imagen, precio, stock, Id } = data


    return (
         
            <div className="itemProducts">
                <Link style={{ textDecoration: "none", color: 'black' }} to={`/productos/${Id}`} >
                    <img src={`/assets/productos/${imagen}`} alt="Imagen producto" />
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                </Link>
                {/* <ItemCount stock={stock} />
                <p>Stock: {stock}</p> */}
                
            </div>
        
    )


}

export default Item