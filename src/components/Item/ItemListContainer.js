import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    console.log("Producto recibido:", productos);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productos);
    }, []);

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList productos={productos} /> 
        </>
    );
};

export default ItemListContainer;