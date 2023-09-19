import { useState } from "react";

const ItemCount = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(initial); 

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="text-center mt-2">
            <div className="contador">
                <button disabled={count<= 10} className="boton" onClick={decrement}>-</button>
                <span>{count}</span>
                <button disabled={count>=stock} className="boton" onClick={increment}>+</button>
                <button className="agregar" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;