import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../../utils/products.mock"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'



const ItemDetailContainer = ({ Titulo }) => {


    const [Articulo, setAritculo] = useState([])
    const {id} = useParams()
    const filterId = products.filter((product) => product.Id === Number(id))

    const getArticulo = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(filterId[0])
        }, 2000)

    })

    useEffect(() => {

        getArticulo
            .then((res) => {
                console.log(res)
                setAritculo(res)
            })

    }, [])



    return (
        <div>
            <ItemDetail datos={Articulo} />


        </div>
    )
}

export default ItemDetailContainer