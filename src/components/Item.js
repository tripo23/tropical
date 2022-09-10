import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useState } from "react";


const Item = (props) => {

  const [itemCount, setItemCount] = useState(1);
  const onAdd = (qty) => qty > 0 ? alert("¡Agregado!") : alert("Seleccioná la cantidad primero.");
  
    return (
      
          <Card className="text-center" style={{ width: '18rem' }}>
            <Link to={`/item/${props.id}`}>
            <Card.Img variant="top" src={props.image} width="286" height="180" />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
              <Card.Text>${props.price}</Card.Text>
            </Card.Body>
            </Link>
            <Card.Body>
              <ItemCount stock={props.stock} initial={itemCount} onAdd={onAdd} />
            </Card.Body>
            <Card.Footer className="text-muted fw-lighter fs-6">Stock: {props.stock}</Card.Footer>
          </Card>
      );
}

export default Item;