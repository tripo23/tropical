import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/css/CartWidget.css';

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
