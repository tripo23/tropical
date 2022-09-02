import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';


const Item = (props) => {
    return (
        <Card className="text-center" style={{ width: '18rem' }}>
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
        </Card>
      );
}

export default Item;