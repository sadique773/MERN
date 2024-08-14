import './App.css'
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import ProductTab from './ProductTab.jsx'


function App() {
  let name = "Sadique Huzefa"
  return (
    <>
      <p>Hey! I am {name}</p>
      <Title/>       
      <ProductTab/>
    </>
  );


}

export default App
 