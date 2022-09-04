import React, { useContext, useState } from "react";
import { CartContext } from '../Context/CartContext';
import "./Cheakout.css"
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal';
import db from "../../FirebaseConfig"
import { collection, addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
                <Link to="/productos"><li style={{ listStyle: "none" }}><button> Ir a Productos</button></li></Link>
            </div>

        </>

    ) : (
        <>
            

                <h1 className='carritoVacio'>Tu compra</h1>

                <div className="CheackoutContainer">


                <div className="CheackoutCart">
                {cart.map((product) => {
                    return (
                        <>
                            <div className='carrito'>
                                <img src={`/assets/productos/${product.imagen}`} alt="Imagen Producto" />
                                <div className='carritoDetalle'>

                                    <p className='titulo'> {product.titulo} </p>
                                    <p className='descripcion'> {product.descripcion} </p>
                                    <p className='precio'>{`Precio $ ${product.precio}`} </p>
                                    <p className='precio' >{`Cantidad = ${product.contador} `}</p>
                                </div>
                                <div className='EliminarArticulo'>
                                    <button className="btnEliminarArticulo" onClick={() => removeItem(product.Id)}> X </button>
                                </div>


                            </div>


                        </>
                    )
                })};
                </div>

                <div className="CheackoutResumen">
                    <h3>Resumen de compra</h3>
                    <p>Total Compra {`$ ${totalCompra}`}</p>
                    <button className='btnConfirmarCompra' onClick={() => setShowModal(true)}>Confirmar compra</button>
                    <Link to="/productos"><li style={{ listStyle: "none" }}><button className='btnSeguirComprando'> Seguir Comprando</button></li></Link>
                    <button className='btnVaciarCarrito' onClick={clear}>Vaciar Carrito</button>

                </div>






                {showModal &&
                    <Modal Title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {succes ? (
                            <div className='confirmacionCompra' >
                                <h6 className='Check'><FontAwesomeIcon icon={faCheckCircle} /></h6>
                                <h2>Su compra se realizo con exito.</h2>
                                <p>El Id de su compra es: <b> {succes} </b></p>
                                <Link to="/cart"><li style={{ listStyle: "none" }}><button className='btnFormCart' onClick={clear}>VOLVER AL CARRITO</button></li></Link>


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

            <div className='prueba21'>





            </div>
        </>
    )
}

export default Cheakout