import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { getDocs, collection  } from "firebase/firestore";

function ItemListContainer() {
    const [data, setData] = useState([]);
    const resultado = useParams();

    useEffect(() => {
        const productosCollection = collection(db, "productos");
        const laConsulta = getDocs(productosCollection);


        laConsulta
            .then((querySnapshot) => {
                const productos = [];
                querySnapshot.forEach((doc) => {
                    
                    productos.push(doc.data());
                });
                setData(productos); 
            })
            .catch((error) => {
                console.error("Error al obtener documentos: ", error);
            });

        if (resultado.id) {
            console.log("Estoy en " + resultado.id);
        } else {
            console.log("Estoy en inicio");
        }
    }, [resultado.id]);

    return <Item data={data} />;
}

export default ItemListContainer;