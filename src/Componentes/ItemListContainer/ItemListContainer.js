import "./ItemListContainer.css"
import ItemList from "../ItemList/itemList"
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ Titulo }) => {


    const [listProd, setListProd] = useState([])
    const {cat} = useParams()
    const filterByCategory = products.filter((products) => products.categoria === cat)


    const getproducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cat === "accesorios" || cat === "alimentos"){
                resolve(filterByCategory)
            }

            else{
                resolve(products)
            }
            
        }, 2000)

    })

    useEffect(() => {

        getproducts
            .then((res) => {
                setListProd(res)
            })

    }, [cat])



    return (
        <div className="inicio">
            <ItemList dataProducts={listProd} />


        </div>
    )
}

export default ItemListContainer