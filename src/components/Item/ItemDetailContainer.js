import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null); 

    const { itemId } = useParams(); 

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "productos", itemId); 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    
                    setProductos({ id: docSnap.id, ...docSnap.data() });
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
            {productos ? (
                <ItemDetail {...productos} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;