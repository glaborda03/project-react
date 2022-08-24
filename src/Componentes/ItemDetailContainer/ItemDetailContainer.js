import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import db from "../../FirebaseConfig"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {


    const [Articulo, setAritculo] = useState([])
    const { id } = useParams()
    // const filterId = products.filter((product) => product.Id === Number(id))


    const getArticulo = async () => {
        const docRef = doc(db, "Productos", id)
        const docSnapshot = await getDoc(docRef)
        let producto = docSnapshot.data()
        producto.Id = id
        return producto
    }

    useEffect(() => {

        getArticulo()
            .then((res) => {
                setAritculo(res)
            })

    }, [id])

    return (
        <div>
            <ItemDetail products={Articulo} />


        </div>
    )
}

export default ItemDetailContainer