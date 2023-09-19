import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null); 

    const { itemId } = useParams(); 

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "productos", itemId); 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    
                    console.log("Documento no encontrado.");
                }
            } catch (error) {
                console.error("Error al obtener el documento:", error);
            }
        };

        fetchProducto();
    }, [itemId]);

    return (
        <div>
            {producto ? (
                <ItemDetail {...producto} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;