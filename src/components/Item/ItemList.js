import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => { 
    return (
        <div className="lista">
            {productos.map(productos => (
                <Item key={productos.id} productos={productos} /> 
            ))}
        </div>
    );
};

export default ItemList;