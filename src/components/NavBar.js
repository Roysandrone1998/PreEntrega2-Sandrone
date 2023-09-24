import {Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";
import Cart from "./Cart";

function NavBar() {
    return (
        <>
        <Link to={"/"}>
        <h1 id="happySkate">Happy Skate</h1>
        </Link>
        
        <nav className="nav">  
        
            <NavLink to="/" >Inicio</NavLink>
            <NavLink to="/productos" >Productos</NavLink>
            <NavLink to='/Buyform' >Formulario</NavLink>
            <NavLink to={Cart} >Cart</NavLink>
            
            <CartWidget />
        </nav>
        
        </>
    );
}


export default NavBar;