import '../styles/css/ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import promise from "../utils/promise";
import data from '../utils/data.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryID} = useParams(); // me lee la ruta y me trae el valor
    
    //componentDidMount
    useEffect(() => {
        if (categoryID) {
            promise(data.filter ( item => item.categoryID == categoryID))
            .then(result => setProducts(result))
            .catch(err => console.log(err))    
        } else {
            promise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        } 
    },[categoryID])

    return (
        <div className="itemListContainer">
            <ItemList items={products}/>    
        </div>    
      );
}

export default ItemListContainer;