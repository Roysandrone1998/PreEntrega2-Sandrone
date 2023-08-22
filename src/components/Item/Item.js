import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="skateC2.jfif" />
        <Card.Body>
        <Card.Title>Skate Completo</Card.Title>
        <Card.Text>
            Marca Element.
        </Card.Text>
        <Button variant="primary">ver mas</Button>
        </Card.Body>
    </Card>
    );
}

export default Item;