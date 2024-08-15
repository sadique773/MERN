import './App.css'
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import ProductTab from './ProductTab.jsx'
import Activity from './Activity.jsx'
import Card from './card.jsx'


function App() {
  let name = "Sadique Huzefa"
  return (
    <>
      <div className='flex'>
        <Card details ={{Title:"Logitech MX Master",
          p1:"8,000 DPI",
          oldprice:"₹1200",
          newPrice:"₹900",
          }}/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  );


}

export default App
 