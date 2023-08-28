import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {itemId} = useParams
    useEffect(() => {
        getProductosId("itemId")
            .then(respuesta => {
                setProducto(respuesta);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    const getProductosId = async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(data => {
                        const productoEncontrado = data.find(prod => prod.id === id);
                        resolve(productoEncontrado);
                    })
                    .catch(error => {
                        reject(error);
                    });
            }, 1000);
        });
    };

    return (
        <div>
            {producto && <ItemDetail {...producto} />}
        </div>
    );
}

export default ItemDetailContainer;