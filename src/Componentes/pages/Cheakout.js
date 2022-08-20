import Table from 'react-bootstrap/Table';
import React, { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import "./Cheakout.css"
import { Link } from 'react-router-dom'


const Cheakout = () => {
    const { cart, clear, removeItem, totalCompra, totalProd } = useContext(CartContext);
    return totalProd === 0 ? (

        <>
        <div className='carritoVacio'>
        <h1>Tu carrito esta vacio</h1>
        <h3>No sabes que comprar? Ve a la seccion de productos y elige lo que mas te guste para tu mascota</h3>
        <Link to="/productos"><li><button> Productos</button></li></Link>
        </div>
        </>
    ):(
        <div>

            <h1 className='carritoVacio'>Tu compra</h1>


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
                                    <button className='btnEliminarArticulo' onClick={() => removeItem(product.Id)}> Eliminar</button>
                                </td>
                            </tr>
                        )
                    })};
                </tbody>
                        <div className='totalCompra'>
                            
                                <p className="precio">Total Compra {`$ ${totalCompra}`}</p>
                                <button className='btnConfirmarCompra' onClick={clear}>Confirmar compra</button>
                                <Link to="/productos"><li><button className='btnSeguirComprando'> Seguir Comprando</button></li></Link>
                                <button className='btnVaciarCarrito' onClick={clear}>Vaciar Carrito</button>
                        </div>
                   

               
            </Table>

        </div>
    )
}

export default Cheakout