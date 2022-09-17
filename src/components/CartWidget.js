import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/css/cartWidget.css';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';


const CartWidget = () => {

    const ctxt = useContext(CartContext);

    return (
        <>
            <div className="cartWidget">
                <i className="material-icons">shopping_cart</i>
                <p>{ctxt.itemsQty()}</p>
            </div>

        </>
    );
}

export default CartWidget;
