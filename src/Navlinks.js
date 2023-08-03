import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navlinks(){
    return(
        <Container>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#happyskate">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#happyskate">Inicio</Nav.Link>
                <Nav.Link href="https://github.com/Roysandrone1998/Happy-Skate-js" target="_blank">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navlinks