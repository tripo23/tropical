import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import '../styles/css/ItemCart.css';
import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react'

const ItemCart = (props) => {
    
    const ctxt = useContext(CartContext);

    return (
    
        <Container fluid className="containerCart bg-light">
            <Row className="align-items-center">
                <Col md={2} className="text-center imageCart"> <Image fluid src={props.image} height="100"/> </Col>
                <Col xs={2} className="text-center">
                    <Row className="align-items-center">
                    <Card.Title>{props.name}</Card.Title>
                    </Row>
                    <Row className="align-items-center">
                    <Card.Subtitle className="mb-2 text-muted small">{props.category}</Card.Subtitle>
                    </Row>
                </Col>
                <Col className="text-center"><Card.Text>{props.qty}</Card.Text></Col>
                <Col className="text-center"><Card.Text>${props.price}</Card.Text></Col>
                <Col className="text-center"><Card.Text>${props.price*props.qty}</Card.Text></Col>
                <Col xs={2} className="text-center"><button className="small material-icons" onClick={() => ctxt.removeItem(props.id)}>clear</button></Col>
            </Row>
        </Container>
    );
}

export default ItemCart;