import React from 'react'
import { useState } from 'react'

export default function Ludoboard() {
  
    let [move,setmove] = useState({blue:0,red:0,yellow:0,green:0})

    let updateBlue=()=>{
      move.blue+=1;
      setmove({...move})
    }

    let updateYellow=()=>{
      move.yellow+=1;
      setmove({...move})
    }

    let updateGreen=()=>{
      move.green+=1;
      setmove({...move})
    }

    let updateRed=()=>{
      move.red+=1;
      setmove({...move})
    }






  return (    
    <div className='board'>
        <p>Blue Moves = {move.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}> +1 </button>

        <p>Yellow Moves = {move.yellow}</p>
        <button style={{backgroundColor:"Yellow",color:"black"}} onClick={updateYellow}> +1 </button>

        <p>Green Moves = {move.green}</p>
        <button style={{backgroundColor:"Green"}}onClick={updateGreen}> +1 </button>

        <p>Red Moves = {move.red}</p>
        <button style={{backgroundColor:"Red"}} onClick={updateRed}> +1 </button>

       
    </div>
  )
}
