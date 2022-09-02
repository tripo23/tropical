import '../assets/styles/css/ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import promise from "../utils/promise";
import data from '../utils/data.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams(); // me lee la ruta y me trae el valor
    
    //componentDidMount
    useEffect(() => {
        if (category) {
            promise(data.filter ( item => item.category === category))
            .then(result => setProducts(result))
            .catch(err => console.log(err))    
        } else {
            promise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        } 
    },[category])

    return (
        <div className="itemListContainer">
            <ItemList items={products}/>    
        </div>    
      );
}

export default ItemListContainer;