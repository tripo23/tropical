import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/css/ItemDetail.css';
import { CartContext } from "../context/CartContext";
import { Stack } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpinnerTropical from "./SpinnerTropical";



const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState(0);
  const itemCtxt = useContext(CartContext);



  const onAdd = (qty) => {
    if (qty > 0) {
      toast.success('Agregado al carrito!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setItemCount(qty);
      itemCtxt.addItem(item, qty);
    }
  }
  
  return (
    <>
      { 
        item.image
        ?
        <Container>
          <Card>
            <Row>
              <Col className='text-center'sm={6}>
                <Image src={item.image} fluid />
              </Col>
              <Col sm={4}>
                <div className="align-bottom">
                  <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text className="small">Categoría: {item.category}</Card.Text>
                      <Card.Text className="small">Stock: {item.stock}</Card.Text>
                      <Card.Text>${item.price}</Card.Text>
                  </Card.Body>
                  <Card.Body className='text-center'>
                    {
                      itemCount === 0
                      ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                      : <Stack direction="horizontal" gap={2}>
                          <Button as={Link} to='/' variant="success" id="buttonKeepBuying"> Seguir comprando </Button>
                          <Button as={Link} to='/cart' variant="outline-success"> Ver Carrito </Button>
                        </Stack>
                    }
                  </Card.Body>
                </div> 
              </Col>
            </Row>
          </Card>
          <ToastContainer />
        </Container>
        : <SpinnerTropical />
      }
    </>
  );
}

export default ItemDetail;