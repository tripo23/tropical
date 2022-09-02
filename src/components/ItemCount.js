import { useState } from "react";
import Button from 'react-bootstrap/Button';
import '../assets/styles/css/ItemCount.css';


const ItemCount = (props) => {
     
    const [count, setCount] = useState(0);

    const countPlus = () => {
        count<props.stock ? setCount(count+1) : alert("Máximo stock permitido.");    
    }

    const countMinus = () => {
        count>=1 ? setCount(count-1) : setCount(count+0);    
    }
    
    const add = () => count > 0 ? alert("¡Agregado!") : alert("Seleccioná la cantidad primero.");

    return(
        
        <>
        {/* Increase / Decrease */}
            <div className="counterContainer">
                <button className="buttonCounter"onClick={countMinus}> - </button>
                <label className="labelCounter">{count}</label>
                <button className="buttonCounter"onClick={countPlus}> + </button>
            </div>
        {/* Add to shopping list */}
            <Button variant="outline-success" id="button-add" onClick={add}> Agregar al carrito </Button>

        </>
    );
}

export default ItemCount;