
import { NavLink } from "react-router-dom";

function CartWidget() {
    // const valorDelContexto = useContext() // ESTA linea TIENE LOS ERRORES

    return (
        <NavLink className="cart" to="/carrito">
            <i className="material-symbols-outlined">shopping_cart</i>
            {/* <span>{valorDelContexto.cantidadTotal}</span> ESTA linea TIENE LOS ERRORES */}
        </NavLink>
    );
}

export default CartWidget;






