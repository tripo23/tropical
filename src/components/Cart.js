import { CartContext } from "../context/CartContext";
import React, { useContext } from 'react'
import '../styles/css/Cart.css';
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import ItemCart from "./ItemCart";




const Cart = () => {

  const ctxt = useContext(CartContext);

  return (
    <>
    <Container>
      <h4>Tu compra</h4>
      {/* Header */}
      <Container fluid className="containerCart bg-light">
            <Row className="align-items-center">
                <Col xs={2} md={4} className="text-center"> <Card.Subtitle className="text-muted small subheader"> Producto </Card.Subtitle> </Col>
                <Col className="text-center"><Card.Subtitle className="text-muted small subheader">Cantidad</Card.Subtitle> </Col>
                <Col className="text-center"><Card.Subtitle className="text-muted small subheader">Precio unitario</Card.Subtitle> </Col>
                <Col className="text-center"><Card.Subtitle className="text-muted small subheader">Subtotal</Card.Subtitle> </Col>
                <Col xs={2} className="text-center"><Card.Subtitle className="text-muted small subheader">Eliminar</Card.Subtitle> </Col>
            </Row>
        </Container>
        {/* Checkout detail */}
      {
        ctxt.cartList.map(item => (
          <ItemCart
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              image={item.image}
              qty = {item.qty}
              description={item.description}
              category={item.category}
          />
        ))
      }
      <Container fluid className="containerCart">
            <Row className="align-items-center">
                <Col xs={8} className="text-center"></Col>
                <Col xs={4} className="text-center"><Button variant="outline-secondary btn-sm btn-cartEmpty" onClick={ctxt.clear}>Vaciar carrito</Button> </Col>
            </Row>
        </Container>
      
      </Container>
    </>
  );
}

export default Cart