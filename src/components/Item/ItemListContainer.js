import React, { useState, useEffect } from 'react';
import Item from './Item';
import { useParams, NavLink } from 'react-router-dom';
import { db } from '../db/Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Dropdown from 'react-bootstrap/Dropdown';

const ItemListContainer = () => {
  const [productosCollection, setProductosCollection] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryCollection = collection(db, 'productos');
        let queryFilter = queryCollection;

        if (category) {
          queryFilter = query(queryCollection, where('category', '==', category));
        }

        const querySnapshot = await getDocs(queryFilter);
        const productosData = [];

        querySnapshot.forEach((doc) => {
          productosData.push({ id: doc.id, ...doc.data() });
        });

        setProductosCollection(productosData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className='contenedor'>
      <h1>Bienvenido</h1>
      <div>
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic' className='boton link'>
            Categorías
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink className='link' to='/category/Skate completo'>
                Skate completo
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className='link' to='/category/Tabla skate'>
                Tabla skate
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className='link' to='/category/Rulemanes'>
                Rulemanes
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className='link' to='/category/Ruedas'>
                Ruedas
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Item data={productosCollection} />
      </div>
    </div>
  );
};

export default ItemListContainer;