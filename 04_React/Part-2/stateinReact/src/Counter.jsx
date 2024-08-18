import React from 'react'
import { useState } from 'react'

function Counter() {

    let [count,setcount] = useState(0);

    function increase(){
        count++;
        setcount(count);
    
    }
    function decrease(){
        setcount(--count);
    }

  return (
    <div>
       <button onClick={decrease}>-</button>
       <span> Count = </span>
       <span>{count} </span>
       <button onClick={increase}>+</button>
    </div>
  )
}
export default Counter;
