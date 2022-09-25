import { CartContext } from "../context/CartContext";
import React, { useContext, useState } from 'react'
import '../styles/css/Cart.css';
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import ItemCart from "./ItemCart";
import { Link } from 'react-router-dom';
import { serverTimestamp, doc, collection, setDoc, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig'
import Swal from 'sweetalert2'

const Cart = () => {

  const [purchased, setPurchased] = useState(false)
  const ctxt = useContext(CartContext);

  const createOrder = () => {
    let itemsDB = ctxt.cartList.map (item => ({
      id: item.id,
      title: item.name,
      price: item.price,
      qty: item.qty,
    }))
    let order = {
      buyer: {
        name: "Kratos",
        email: "kratos@gow.com",
        phone: "12345678"
      },
      date: serverTimestamp(),
      total: ctxt.calcSubTotal(),
      items: itemsDB
    }
    
    const createOrderFB = async () => {
      const newOrderRef = doc(collection(db, "orders")) // Si no existe la collection orders, la creo. Creo un doc dentro de la collection y obtengo el ID del doc.
      await setDoc(newOrderRef, order); // en newOrderRef guardo la data del "order"
      return newOrderRef;
    }

    createOrderFB()
      .then(result => {
        Swal.fire(
          '¡Compra exitosa!',
          'Tu orden con el ID ' + result.id + ' ha sido creada.',
          'success'
        )
              
        //Actualizo el stock en la DB
        ctxt.cartList.forEach(async (element) => {
          const itemRef = doc(db, "products", element.id);

          await updateDoc(itemRef, {
            stock: increment(-element.qty)
          });
        });  

        ctxt.clear();
        setPurchased(true);
      })
      .catch (err => console.log(err))
  }

  return (

      <Container>
        {/* Título */}
        <h4>Tu compra</h4>
        <p className="small">Envío gratis con compras superiores a $8000</p>
        <Row>

        {/* Contenido del carrito */}

        {
          ctxt.cartList.length > 0
          ?
          <> 
          <Col xl={8}>
            {/* Header tablas */}
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
            {/* Vaciar carrito */}
            <Container fluid className="containerCart">
                  <Row className="align-items-center">
                      <Col xs={9} className="text-center"></Col>
                      <Col xs={3} className="text-center"><Button variant="outline-secondary btn-sm btn-cartEmpty" onClick={ctxt.clear}>Vaciar carrito</Button> </Col>
                  </Row>
            </Container>
          </Col>
          {/* Resumen de compra */}
          <Col xl={4}>
            <Card>
              <Card.Header>Resumen de tu compra</Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={9}><h6>Subtotal</h6></Col>
                  <Col sm={3}>${ctxt.calcSubTotal()}</Col>
                </Row>
                <Row>
                  <Col sm={9}>Envío</Col>
                  {
                    ctxt.shippingCost() > 0
                    ? <Col sm={3}>${ctxt.shippingCost()}</Col>
                    : <Col xs={3}>¡Gratis!</Col>
                  }
                </Row>
                <Row className="pt-3"><hr/></Row>
                <Row className="pt-1">
                  <Col sm={9}><h5>Total</h5></Col>
                  <Col sm={3}>${ctxt.calcSubTotal()+ctxt.shippingCost()}</Col>
                </Row>
                </Card.Body>
                <Card.Body className="text-center">
                  <Row><Button variant="success" onClick={createOrder}>Terminar mi compra</Button></Row>
                </Card.Body>
            </Card>
          </Col>
          </>
          : 
          <Container className="text-center w-75">
              <Row>
                {
                  purchased
                  ? <h4>¡Muchas gracias por tu compra!</h4>
                  : <p>Tu carrito está vacío, tal vez quisieras ver qué tenemos para ofrecerte...</p>
                }
              </Row>
              <Row className="text-center justify-content-center">
                <Col md={7}>
                  <Image fluid src={'https://res.cloudinary.com/tripo23/image/upload/v1663449850/tropical/cart_empty2_ipdkmi.png'} />
                </Col>
              </Row>
              <Row>
                {
                  purchased
                  ? <Button id='buttonGoShopping' variant="success" as={Link} to='/'>¡Comprar más!</Button>
                  : <Button id='buttonGoShopping' variant="success" as={Link} to='/'>Comprar plantitas</Button>
                }
                
              </Row>
          </Container>
        }

          
        </Row>  
    </Container>
  );
}

export default Cart