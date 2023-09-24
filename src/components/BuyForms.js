import React from 'react';
import { useState } from 'react';

import { useCartContext } from '../components/CartContext';
import {createItem} from '../components/db/Firebase';
import {  ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BuyForm = () => {
    const {cart, finalPrice, emptyCart} = useCartContext();
    const [buy, setBuy] = useState({
        name: "",
        email: "",
        email2:"",
        phone: "",
        address: "",
    });

    const catchInputs = (e) =>{
        setBuy({...buy, [e.target.name] : e.target.value})
    }

    const saveData = (e) =>{
        e.preventDefault();

        if(!buy.name || !buy.email || !buy.email2 || !buy.phone || !buy.address){
        toast.warn('Debe completar todos los campos requeridos',{
            position:"bottom-center",
            autoClose: 1000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
        });
        }else if(buy.email !== buy.email2){
        toast.warn('El email debe coincidir',{
            position:"bottom-center",
            autoClose: 1000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,
        });
    }else{

    const items = cart.map(productos => ({id:productos.id, title: productos.title, price: productos.price, quantity:productos.quantity}));
    const final = finalPrice();
    const buyDate = new Date();
    const obj = {buy,items,final,buyDate};

    createItem(obj).then(id=>{
    console.log(id);
    toast.success(`
            COMPRA FINALIZADA EXITOSAMENTE
            El n° de orden de compra es ${id}
            Te enviaremos los detalles a ${buy.email}
            ¡Muchas Gracias!`,{
        position:"bottom-center",
        autoClose: 10000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,});

    setBuy({name: "",email: "",email2:"",phone: "",address: "",});

    emptyCart();
    })}}
    

    return (
        <div>
        <form>
            <div className='buyForm'>
            <h2 className='subtitle'>Formulario de Compra</h2>

            <label className='label'>Nombre y Apellido:</label>
            <input type="text" name="name" placeholder="Ingrese su nombre..." 
            value={buy.name} onChange={catchInputs}/>

            <label className='label'>Email:</label>
            <input type="email" name="email" placeholder="Ingrese su email..." 
            value={buy.email} onChange={catchInputs} />

            <label className='label'>Confirme su email:</label>
            <input type="email" name="email2" placeholder="Confirme su email..." 
            value={buy.email2} onChange={catchInputs} />

            <label className='label'>Numero de Telefono:</label>
            <input type="number" name="phone" placeholder="Ingrese su numero de telefono..." 
            value={buy.phone} onChange={catchInputs}/>

            <label className='label'>Direccion:</label>
            <input type="text" name="address" placeholder="Ingrese su direccion..." 
            value={buy.address} onChange={catchInputs}/>

                <button onClick={saveData} type='submit'>
                Finalizar Compra
                </button>
                <ToastContainer />
            </div>
        </form>

        </div>
    )
    }

export default BuyForm;