import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';

import {useCartContext } from './CartContext'

const CartWidget = () => {
  const {finalProducts } = useCartContext();

  return (
    <div >
        
        <Link to="/Cart"><i className="material-symbols-outlined">shopping_cart</i></Link>
        
        <span>{finalProducts() || ''}</span>
    </div>
  )
};

export default CartWidget