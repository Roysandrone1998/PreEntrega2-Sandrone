import React from 'react';
import { useCartContext } from '../components/CartContext';


const ItemCart = ({productos}) => {
    const { removeProductCart } =  useCartContext();

  return (
    <div className='itemCart'>
        <img src={productos.image} alt={productos.title} />
        <div>
            <p>Nombre: {productos.title}</p>
            <p>Cantidad: {productos.quantity}</p>
            <p>Precio: {productos.price}</p>
            <p>Subtotal: {productos.quantity * productos.price}</p>
            <button onClick={()=> removeProductCart(productos.id)}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;