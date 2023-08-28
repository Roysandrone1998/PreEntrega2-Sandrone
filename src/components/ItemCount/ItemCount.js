import { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const sumando = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restando = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="contador">
            <div className="botonesCard">
                <button className="boton" onClick={sumando}>+</button>
                <h4 className="cantidad">{cantidad}</h4>
                <button className="boton" onClick={restando}>-</button>
            </div>
            <div>
                <button className="agregar" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;