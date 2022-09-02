import './assets/styles/css/App.css';
import NavbarTropical from "./components/Navbar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <>
      <NavbarTropical/>
      <ItemDetailContainer/>
      {/* <ItemListContainer/> */}
    </>
  );
}

export default App;
