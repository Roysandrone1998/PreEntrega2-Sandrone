import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [data, setData] = useState([]);
    const resultado = useParams()
    
    
    useEffect(() => {
        getProductos(setData);
        if(resultado.id){
            console.log("estoy en "+resultado.id)
        }else{console.log("Estoy en inicio")}
    }, [resultado.id]);

    const getProductos = () => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    }

    return (
        <Item data={data} />
    );
}

export default ItemListContainer;