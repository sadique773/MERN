import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='h-screen w-screen relative ...' style={{backgroundColor:color}}>
        <div className='bg-white absolute inset-x-16 bottom-10 rounded-3xl' >
          <button className='m-1 rounded-2xl bg-red-600' onClick={()=>setColor("red")}>Red</button>
          <button className='m-1 rounded-2xl bg-green-600'onClick={()=>setColor("green")}>Green</button>
          <button className='m-1 rounded-2xl bg-blue-600'
          onClick={()=>setColor("blue")}>Blue</button>
          <button className='m-1 rounded-2xl bg-amber-600'
          onClick={()=>setColor("olive")}>Olive</button>
          <button className='m-1 rounded-2xl bg-gray-600'onClick={()=>setColor("gray")}>Gray</button>
          <button className='m-1 rounded-2xl bg-yellow-400 text-black' onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='m-1 rounded-2xl bg-red-300'onClick={()=>setColor("pink")}>Pink</button>
          <button className='m-1 rounded-2xl bg-white text-black border-black'onClick={()=>setColor("white")}>White</button>
          <button className='m-1 rounded-2xl bg-black text-white'onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </>    
  )
}

export default App
