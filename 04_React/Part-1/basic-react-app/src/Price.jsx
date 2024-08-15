import React from 'react'
import "./Product"

function Price({oldPrice,newPrice}) {
  return (
    <div className='flex'>
        <p><del>{oldPrice}</del></p>
        <p>{newPrice}</p>
    </div>
  )
}

export default Price;