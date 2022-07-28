import "./ItemListContainer.css"
import Item from "../Item/Item"
import ItemList from "../ItemList/itemList"
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"


const ItemListContainer = ({ Titulo }) => {


    const [listProd, setListProd] = useState([])

    const getproducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })

    useEffect(() => {

        getproducts
            .then((res) => {
                setListProd(res)
            })

    }, [])



    return (
        <div>
            <h2>{Titulo}</h2>
            <ItemList dataProducts={listProd} />


        </div>
    )
}

export default ItemListContainer