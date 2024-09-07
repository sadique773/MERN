import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase (){
    setCount(count+1);
  }

  function decrease (){
    if(count > 0){
      setCount(count-1);
    }
    
  }
  return (
    <>
      <button onClick={increase}>Cilck me +1 </button>
      <div>
        <h3>Your counter is : {count}</h3>
      </div>
      <button onClick={decrease}>Cilck me -1 </button>
    </>
  )
}

export default App
