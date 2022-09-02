import React, { useEffect, useState } from 'react'
import data from '../utils/data.js'
import promise from '../utils/promise'
import ItemDetail from './ItemDetail'
import '../assets/styles/css/ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);

  //componentDidMount
  useEffect(() => {
    promise(data[1])
        .then (result => setProducts(result))
        .catch (err => console.log(err))
  },[]);

  return (
    <div className="itemDetailContainer">
        <ItemDetail items={products}/> 
    </div>
  )
}




export default ItemDetailContainer