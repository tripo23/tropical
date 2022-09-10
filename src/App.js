import './styles/css/App.css';
import NavbarTropical from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';


const App = () => {
  return (

    <BrowserRouter>
      <NavbarTropical/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
