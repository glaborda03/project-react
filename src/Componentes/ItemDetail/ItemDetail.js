import "./ItemDetail.css"

const ItemDetail = ({ datos }) => {
    const { title, imagenes, price,  descripcion, } = datos


    return (

        <div className="itemDetailCaja">
            <img src={`/assets/productos/${imagenes}`} alt="Imagen producto" />
            <div className="itemDetail">           
                <h1>{title}</h1>
                <h3>{descripcion}</h3>
                <p>Precio ${price}</p>
                <button>Comprar</button>
            </div>

        </div>
    )


}

export default ItemDetail