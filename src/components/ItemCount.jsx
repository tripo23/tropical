import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import '../styles/css/ItemCount.css';


const ItemCount = (props) => {
     
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(props.initial);
    },[])

    const countPlus = () => {
        count<props.stock ? setCount(count+1) : alert("Máximo stock permitido.");    
    }

    const countMinus = () => {
        count>=1 ? setCount(count-1) : setCount(count+0);    
    }
    
    return(
        
        <>
        {/* Increase / Decrease */}
            <div className="counterContainer">
                <button className="buttonCounter"onClick={countMinus}> - </button>
                <label className="labelCounter">{count}</label>
                <button className="buttonCounter"onClick={countPlus}> + </button>
            </div>
        {/* Add to shopping list */}
            {
                count === 0
                ? <Button variant="outline-success" disabled id="button-add" onClick={() => props.onAdd(count)}> Agregar al carrito </Button>
                : <Button variant="outline-success" id="button-add" onClick={() => props.onAdd(count)}> Agregar al carrito </Button>
            }
            

        </>
    );
}

export default ItemCount;