import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const ItemDetail = (props) => {

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
                      <ItemCount stock={props.items.stock} initial={1} />
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

/* 
 <Card.Img variant="top" src={props.image} width="286" height="180" />
          <Card.Body style={{height: '25vh'}}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>${props.price}</Card.Text>
          </Card.Body>
          <Card.Body>
            <ItemCount stock={props.stock} initial={1} />
          </Card.Body>
          <Card.Footer className="text-muted fw-lighter fs-6">Stock: {props.stock}</Card.Footer>
*/