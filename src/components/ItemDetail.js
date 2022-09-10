import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/css/ItemDetail.css';

const ItemDetail = (props) => {

  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    if (qty > 0) {
      alert("¡Agregado!");
      setItemCount(qty);
    }
  }

  return (
    <Container>
      <Card>
        <Row>
          <Col className='text-center'sm={6}>
            <Image src={props.items.image} fluid />
          </Col>
          <Col sm={4}>
            <div className="align-bottom">
                <Card.Body>
                    <Card.Title>{props.items.name}</Card.Title>
                    <Card.Text>{props.items.description}</Card.Text>
                    <Card.Text className="small">Categoría: {props.items.category}</Card.Text>
                    <Card.Text className="small">Stock: {props.items.stock}</Card.Text>
                    <Card.Text>${props.items.price}</Card.Text>
                  </Card.Body>
                    <Card.Body className='text-center'>
                      {
                        itemCount === 0
                        ? <ItemCount stock={props.items.stock} initial={itemCount} onAdd={onAdd} />
                        : <Button as={Link} to='/cart' variant="success" id="buttonCheckout"> Checkout </Button>
                      }
                    </Card.Body>
                <Card.Body/>
            </div> 
          </Col>
        </Row>
      </Card>
    

  </Container>
    );
}

export default ItemDetail;