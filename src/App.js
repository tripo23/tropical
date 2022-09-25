import "./styles/css/App.css";
import NavbarTropical from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavbarTropical />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
