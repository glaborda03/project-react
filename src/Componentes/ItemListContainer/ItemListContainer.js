import "./ItemListContainer.css"
import ItemProduct from "../ItemProducts/ItemProducts"


const ItemListContainer=({Titulo})=>{

    const producto1 = {
        titulo: "Collar de Tela",
        imagen: "collar.jpg",
        precio: 750,
        stock: 10

    }
    const producto2 = {
        titulo: "Correa de Tela",
        imagen: "correa.jpg",
        precio: 950,
        stock: 8

    }
    const producto3 = {
        titulo: "Arnes de Tela",
        imagen: "Arnes.jpg",
        precio: 1290,
        stock: 6

    }

    return(
        <div>
            <h2>{Titulo}</h2>
            <ItemProduct data={producto1} />
            <ItemProduct data={producto2} />
            <ItemProduct data={producto3} />
        </div>
    )
}

export default ItemListContainer