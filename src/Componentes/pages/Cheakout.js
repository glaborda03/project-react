import Table from 'react-bootstrap/Table';
import React, { useContext } from "react";
import { CartContext } from '../Context/CartContext';


const Cheakout = () => {
    const { cart, clear, removeItem } = useContext(CartContext);
    return (
        <div>

            <h1>Cheakout</h1>


            <Table striped>
                <thead>
                    <tr>
                        <th>Articulo</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => {
                        return (
                            <tr>
                                <td>
                                    <div>
                                        <img src={product.imagen} alt="Imagen Producto" />
                                        <p> {product.titulo} </p>
                                        <p> {product.precio} </p>
                                    </div>
                                </td>


                                <td>
                                    <p> {product.contador} </p>
                                </td>



                                <td>
                                    <button onClick={removeItem}> Eliminar Articulo</button>
                                </td>
                            </tr>
                        )
                    })};
                </tbody>
                <tfoot>
                    <button onClick={clear}>Vaciar Carrito</button>
                    <button onClick={clear}>Confirmar compra</button>

                </tfoot>
            </Table>

        </div>
    )
}

export default Cheakout