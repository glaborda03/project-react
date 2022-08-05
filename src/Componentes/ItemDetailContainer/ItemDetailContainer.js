import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {


    const [Articulo, setAritculo] = useState([])
    const {id} = useParams()
    const filterId = products.filter((product) => product.Id === Number(id))

    const getArticulo =  new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(filterId)
            resolve(filterId[0])
        }, 5000)

    })

    useEffect(() => {

        getArticulo
            .then((res) => {
                setAritculo(res)
            })

    }, [])



    return (
        <div>
            <ItemDetail products={Articulo} />


        </div>
    )
}

export default ItemDetailContainer