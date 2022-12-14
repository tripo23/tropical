import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

  const Item = ({id, name, image, description, price, stock}) => {

  return (
    <Card className="text-center" style={{ width: '18rem' }}>
      <Link to={`/item/${id}`}>
        <Card.Img variant="top" src={image} width="286" height="180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Link>
      <Card.Body>
        <Button as={Link} to={`/item/${id}`} variant="outline-success"> Ver detalle </Button>
      </Card.Body>
      <Card.Footer className="text-muted fw-lighter fs-6">Stock: {stock} </Card.Footer>
    </Card>
  );
}

export default Item;