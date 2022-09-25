import '../styles/css/ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firebaseConfig';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryID} = useParams(); // me lee la ruta y me trae el valor
    
    //ComponentDidUpdate
    useEffect(() => {
        firestoreFetch(categoryID)
            .then(result => setProducts(result))
            .catch(err => console.log(err))       
    }, [categoryID]);

    return (
        <div className="itemListContainer">
            <ItemList items={products}/>    
        </div>    
      );
}

export default ItemListContainer;