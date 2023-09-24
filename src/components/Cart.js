import React from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../components/ItemCart';






const Cart = () => {
  const {cart, finalPrice} = useCartContext();

  //renderin condicional para el carrito con los productos finales
  if(cart.length === 0){
    return (
      <>
        <div className='emptyCart'>

          <p>No hay elementos en el carrito</p>
          <Link className='finish-link' to='/'>Hacer Compras</Link>
        </div>
        
      </>
    )
  }

  return (
    <div>
        <div>
          {
            cart.map(productos => <ItemCart key={productos.id} productos={productos}/>)
          }
          <p className='total' style={{color: "Black"}}>Total:$ {finalPrice()}</p>
          <div className='buyButton'>
          <Link to="/buyForm"><button>COMPRAR</button></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Cart;