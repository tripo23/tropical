import '../assets/styles/css/ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import promise from "../utils/promise";
import data from '../utils/data.js';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    //componentDidMount
    useEffect(() => {
        promise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    },[])

    return (
        <div className="itemListContainer">
            <ItemList items={products}/>    
        </div>    
      );
}

export default ItemListContainer;