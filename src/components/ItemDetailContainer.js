import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import '../styles/css/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { firestoreFetchSingleDoc } from '../utils/firebaseConfig.js';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    firestoreFetchSingleDoc(id)
        .then (result => setProduct(result))
        .catch (err => console.log(err))
  }, []);



  return (
    <div className="itemDetailContainer">
        <ItemDetail item={product}/> 
    </div>
  )
}

export default ItemDetailContainer;