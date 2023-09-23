import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [productosCollection, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryCollection = collection(db, "productos");
        let queryFilter = queryCollection;

        if (category) {
          queryFilter = query(queryCollection, where("category", "==", category));
        }

        const querySnapshot = await getDocs(queryFilter);
        const productosData = [];

        querySnapshot.forEach((doc) => {
          productosData.push({ id: doc.id, ...doc.data() });
        });

        setData(productosData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [category]);

  return <Item data={productosCollection} />;
};

export default ItemListContainer;