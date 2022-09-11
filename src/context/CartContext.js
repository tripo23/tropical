import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => cartList.find ( e => e.id === id);

    const addItem = (item, qty) => {
        let found = isInCart(item.id)

        if (found) {
            found.qty = found.qty + qty;
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

    return (
        <CartContext.Provider value = {{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;