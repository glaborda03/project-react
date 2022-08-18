import Table from 'react-bootstrap/Table';
import React, { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import "./Cheakout.css"


const Cheakout = () => {
    const { cart, clear, removeItem } = useContext(CartContext);
    return (
        <div>

            <h1>Cheakout</h1>


            <Table striped className='tabla'>
                <thead>
                    <tr className='cabecera'>
                        <th>Articulo</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar Articulo</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => {
                        return (
                            <tr>
                                
                                <td>
                                    <div className='Cheakout'>
                                        <p className='descripcion'> {product.descripcion} </p>
                                    </div>
                                </td>
                                
                                
                                <td>
                                    <div className='Cheakout img'>
                                        <img src={`/assets/productos/${product.imagen}`} alt="Imagen Producto" />
                                    </div>
                                </td>

                                


                                <td>
                                    <p className='precio'>{`$ ${product.precio}`} </p>
                                </td>

                                <td>
                                    <p className='precio' >{product.contador} </p>
                                </td>



                                <td>
                                    <button className='btnEliminarArticulo' onClick={()=>removeItem(product.Id)}> Eliminar</button>
                                </td>
                            </tr>
                        )
                    })};
                </tbody>
                <tfoot className='btnFooter'>
                 
                        <button className='btnVaciarCarrito' onClick={clear}>Vaciar Carrito</button>
                        <button onClick={clear}>Confirmar compra</button>
                   

                </tfoot>
            </Table>

        </div>
    )
}

export default Cheakout