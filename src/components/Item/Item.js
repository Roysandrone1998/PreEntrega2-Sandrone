import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
function Item() {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="skateC2.jfif" />
        <Card.Body>
        <Card.Title>Skate Completo</Card.Title>
        <Card.Text>
            Marca Element.
        </Card.Text>
        <ItemCount inicial={1} stock={10} onAdd={(cantidad)=> console.log("fue agregado", cantidad)} />
        <Button variant="primary">ver mas</Button>
        </Card.Body>
    </Card>
    );
}

export default Item;