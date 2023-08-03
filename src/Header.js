import Button from 'react-bootstrap/Button';
import Navlinks from './Navlinks';
function Header(){
    return(
    <header className="bg-primary" id="happyskate">
        <h1>Happy Skate.</h1>
        <Navlinks />
        <p>Tu tienda online.</p>
        <Button variant="dark">Inicio</Button>
    </header>
        )
}

export default Header