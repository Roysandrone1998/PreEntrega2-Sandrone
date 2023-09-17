import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../db/Firebase";

const ItemDetailContainer = () => {
    const [productosCollection, setProduct] = useState(null);
    const [loading, setLoading] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "productos", "0JuURIebZEMNp8k7bVGy");

        getDoc(docRef)
        .then((response) => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data };
            setProduct(productAdapted);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [itemId]);

    if (loading) {
        return (
            
            <div className="loader">
                <h1>CARGANDO</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzziPRR10XSX5is8-RMXn4doBpECT_1knSz1ISaO7Fww&s" alt="Loading..." />
            </div>
        );
    } else {
        return (
        <div>
            <ItemDetail {...productosCollection} />
        </div>
        );
    }
    };

export default ItemDetailContainer;