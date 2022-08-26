import Table from 'react-bootstrap/Table';
import React, { useContext, useState } from "react";
import { CartContext } from '../Context/CartContext';
import "./Cheakout.css"
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal';
import db from "../../FirebaseConfig"
import { collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const Cheakout = () => {
    const { cart, clear, removeItem, totalCompra, totalProd } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false)
    const [succes, setSucces] = useState()
    const [order, setOrder] = useState({
        item: cart.map((product) => {
            return {
                Id: product.Id,
                title: product.titulo,
                price: product.precio
            }
        }),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalCompra

    })
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    })



    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order1", { ...order, buyer: formData })
        pushData({ ...order, buyer: formData })
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'Ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSucces(orderDoc.id)
        console.log("Orden Creada", orderDoc)
    }

    return totalProd === 0 ? (

        <>
            <div className='carritoVacio'>
                <h1>Tu carrito esta vacio</h1>
                <h3>No sabes que comprar? Ve a la seccion de productos y elige lo que mas te guste para tu mascota</h3>
                <Link to="/productos"><li><button> Productos</button></li></Link>
            </div>

        </>

    ) : (
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
                    <button className='btnConfirmarCompra' onClick={() => setShowModal(true)}>Confirmar compra</button>
                    <Link to="/productos"><li><button className='btnSeguirComprando'> Seguir Comprando</button></li></Link>
                    <button className='btnVaciarCarrito' onClick={clear}>Vaciar Carrito</button>
                </div>



            </Table>

            {showModal &&
                <Modal Title="DATOS DE CONTACTO" close={() => setShowModal()}>
                    {succes ? (
                        <div className='confirmacionCompra' >
                            <h2>Su compra se realizo con exito.</h2>
                            <p>El Id de su compra es: <b> {succes} </b></p>
                            <Link style={{textDecoration: "none"}} to="/cart"><li><button className='btnFormCart' onClick={clear}>VOLVER AL CARRITO</button></li></Link>


                        </div>
                    ) : (
                        <div>
                            <>
                            <h2>Ingresa tus Datos</h2>
                            </>
                        <form onSubmit={submitData} className="formCart">
                            <label>NOMBRE</label>
                            <input className='inputForm'
                                type='text'
                                name='name'
                                placeholder='Ingrese su nombre'
                                onChange={handelChange}
                                value={formData.name}


                            />

                            <label>TELEFONO</label>
                            <input className='inputForm'
                                type='number'
                                name='phone'
                                placeholder='Ingrese su telefono'
                                onChange={handelChange}
                                value={formData.phone}


                            />

                            <label>EMAIL</label>
                            <input className='inputForm'
                                type='email'
                                name='email'
                                placeholder='Ingrese su correo electronico'
                                onChange={handelChange}
                                value={formData.email}


                            />

                            <button type='submit' className='btnForm'>ENVIAR</button>


                        </form>
                        </div>
                    )}


                </Modal>

            }


        </div>
    )
}

export default Cheakout