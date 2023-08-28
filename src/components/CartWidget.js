import { NavLink } from "react-router-dom";

function CartWidget() {
    return (
        <NavLink className="cart" to="/carrito">
            <i className="material-symbols-outlined">shopping_cart</i>
            <span>0</span>
        </NavLink>
    );
}

export default CartWidget;