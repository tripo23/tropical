import '../assets/styles/css/cartWidget.css';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';


const CartWidget = () => {
    return (
        <>
            <div className="cartWidget">

                <i className="material-icons">shopping_cart</i>
                <p>3</p>
            </div>
{/* 
            <Button variant="light">
                <i className="material-icons">shopping_cart</i> 
                <Badge bg="secondary">9</Badge>
            </Button> */}
        </>
    );
}

export default CartWidget;
