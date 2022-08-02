import ItemDetail from "../ItemDetail/ItemDetail"
import art from "../../utils/Item.mock"
import { useEffect, useState } from "react"



const ItemDetailContainer = ({ Titulo }) => {


    const [Articulo, setAritculo] = useState([])

    const getArticulo = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(art)
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