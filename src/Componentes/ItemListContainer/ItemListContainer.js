import "./ItemListContainer.css"
import ItemList from "../ItemList/itemList"
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ Titulo }) => {


    const [listProd, setListProd] = useState([])
    const {categoryid} = useParams()
    const filterByCategory = products.filter((products) => products.categoria === categoryid)

    const getproducts =() => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid === "accesorios" || categoryid === "alimentos"){
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

    }, [])



    return (
        <div>
            <h2>{Titulo}</h2>
            <ItemList dataProducts={listProd} />


        </div>
    )
}

export default ItemListContainer