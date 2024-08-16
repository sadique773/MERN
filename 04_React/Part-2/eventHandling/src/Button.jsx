import React from 'react'

export default function Button() {
  return (
    <div>
        <button onClick={(event)=>{
            console.log("Cliked")
            console.log(event)
        }}>Click me</button>
    </div>
  )
}
