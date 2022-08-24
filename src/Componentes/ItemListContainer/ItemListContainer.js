import "./ItemListContainer.css"
import ItemList from "../ItemList/itemList"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../FirebaseConfig"


const ItemListContainer = ({ Titulo }) => {


    const [listProd, setListProd] = useState([])
    const { cat } = useParams()


    const getProducts = async () => {
        const filterByCategory = cat ? query(collection(db, 'Productos'), where("categoria", "==", cat)) :


            collection(db, "Productos")
        const productsSnapshot = await getDocs(filterByCategory)
        const productList = productsSnapshot.docs.map((doc) => {

            let producto = doc.data()
            producto.Id = doc.id

            return producto

        })
        console.log(productList)
        return productList
    };

    useEffect(() => {

        getProducts()
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