import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => cartList.find ( e => e.id === id);

    const addItem = (item, qty) => {
        let found = isInCart(item.id)

        if (found) {
            found.qty = found.qty + qty;
            setCartList([
                ...cartList
            ]);
        } else {
            let itemCheckout = {
                ...item, qty
            }
            setCartList([
                ...cartList, itemCheckout
            ]);
        }
        
    }

    const removeItem = (id) => {
        let removed = cartList.filter(item => item.id != id) //Creo un nuevo array con todos los elementos, excepto el que matchee.
        setCartList(removed);
    }

    const clear = () => {
        setCartList([]);
    }

    const calcSubTotal = () => {
        let subTotal = 0;
        cartList.forEach(element => {
            subTotal = subTotal + element.price * element.qty;
        });
        return subTotal;
    }

    const itemsQty = () => {
        let qty = cartList.map (item => item.qty); /* Mapeo en un array las cantidades de los items del carrito */
        return qty.reduce (((pV,cV) => pV + cV), 0); /* Sumo esas cantidades */
    }

    const shippingCost = () => {
        return calcSubTotal() > 8000 ? 0 : 350
    }

    return (
        <CartContext.Provider value = {{cartList, addItem, removeItem, clear, calcSubTotal, shippingCost, itemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;