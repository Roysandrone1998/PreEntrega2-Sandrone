import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../Item/ItemListContainer';
import ItemDetailContainer from '../Item/ItemDetailContainer';
import Cart from '../Cart';
import BuyForm from '../BuyForms';

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/buyform' element={<BuyForm />} />
        <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1>} />
      </Routes>
    </main>
  );
}

export default Main;