
import Item from "../Item/Item";

const ItemList = ({ dataProducts }) => {
    return (
        <div className="containerInicio">
            {dataProducts.map((product, Id) => {
                return <Item key={Id} data={product} />
            })}
        </div>
    )
}

export default ItemList