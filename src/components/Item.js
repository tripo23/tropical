import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import SpinnerTropical from "./SpinnerTropical";


  const Item = ({id, name, image, description, price, stock}) => {
  // const Item = ({product}) => {
  // const [itemCount, setItemCount] = useState(1);
  // const onAdd = (qty) => qty > 0 ? alert("¡Agregado!") : alert("Seleccioná la cantidad primero.");
  
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
        {/* <ItemCount stock={props.stock} initial={itemCount} onAdd={onAdd} /> */}
        <Button as={Link} to={`/item/${id}`} variant="outline-success"> Ver detalle </Button>
      </Card.Body>
      <Card.Footer className="text-muted fw-lighter fs-6">Stock: {stock} </Card.Footer>
    </Card>
  );
}

export default Item;