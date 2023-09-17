import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { NavLink } from "react-router-dom";

function CartWidget() {
    const { cart } = useContext(CartContext);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const newTotalQuantity = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
        setTotalQuantity(newTotalQuantity);
    }, [cart]);

    return (
        <NavLink className="cart" to="/cart">
            <i className="material-symbols-outlined">shopping_cart</i>
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </NavLink>
    );
}

export default CartWidget;




