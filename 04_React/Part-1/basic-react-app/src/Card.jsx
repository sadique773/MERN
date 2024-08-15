import React from 'react'
import Price from './price';
import Title from './Title';

function Card({details}) {
    
  return (
    <div className='Product'>
        <p>{details.Title}</p>
        <p>{details.p1}</p>
        <Price oldPrice={details.oldPrice} newPrice={details.oldPrice}/>
    </div>
  )
}

export default Card;