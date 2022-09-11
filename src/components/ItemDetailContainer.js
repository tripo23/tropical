import React, { useEffect, useState } from 'react'
import data from '../utils/data.js'
import promise from '../utils/promise'
import ItemDetail from './ItemDetail'
import '../styles/css/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [product, setProducts] = useState([]);
  

  //componentDidMount
  useEffect(() => {
    promise(data.find(item => item.id == id))
        .then (result => setProducts(result))
        .catch (err => console.log(err))
  },[]);

  return (
    <div className="itemDetailContainer">
        <ItemDetail item={product}/> 
    </div>
  )
}

export default ItemDetailContainer;