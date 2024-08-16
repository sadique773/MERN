import React from 'react'
import Price from './price';
import Title from './Title';
import "./Product"

function Card({productName,description,oldPrice,newPrice}) {     
  return (
    <div className='Product'>
        <h3>{productName}</h3>
        <p>{description}</p>
        <Price oldPrice={oldPrice} newPrice={newPrice}/>
    </div>
  )
}

export default Card;