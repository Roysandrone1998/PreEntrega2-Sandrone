import {Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";
function NavBar() {
    return (
        <>
        <Link to={"/"}>
        <h1 id="happySkate">Happy Skate</h1>
        </Link>
        
        <nav className="nav">  
        
            <NavLink to="/" >Inicio</NavLink>
            <NavLink to="/productos" >Productos</NavLink>
            <NavLink to="/quienesSomos" >Quienes somos</NavLink>
            <a href="/carrito">Carrito</a>
            <CartWidget />
        </nav>
        
        </>
    );
}


export default NavBar;