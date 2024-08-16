import React from 'react'

function handleSubmit(event){
    event.preventDefault();
    console.log("Submitted")
}

export default function Form() {

  return (
   <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" />
        <button>Submit</button>
    </form>
   </div>
  )
}
