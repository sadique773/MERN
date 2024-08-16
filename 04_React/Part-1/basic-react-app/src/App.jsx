import './App.css'
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import ProductTab from './ProductTab.jsx'
import Activity from './Activity.jsx'
import Card from './card.jsx'


function App() {
  let productName = ["Logitech MX Master","ApplemPencil (2nd Gen)","Zebronics Zeb-transformer","Petronics Toad 23"]

  let description = ["8,000 DPI","intutive surface","Designed for iPad Pro","Wirless"]

  let oldPrice = ["₹12,486","₹11,900","₹1,599","₹566"]

  let newPrice =["₹999","₹1,099","₹799","₹499"]
  return (
    <>
      <div className='flex'>
        <Card
        productName ={productName[0]}
        description={description[0]}
        oldPrice={oldPrice[0]}
        newPrice={newPrice[0]}
      />  
      <Card
        productName ={productName[1]}
        description={description[1]}
        oldPrice={oldPrice[1]}
        newPrice={newPrice[1]}
      />              
  
      <Card
        productName ={productName[2]}
        description={description[2]}
        oldPrice={oldPrice[2]}
        newPrice={newPrice[2]}
      />        
      <Card
        productName ={productName[3]}
        description={description[3]}
        oldPrice={oldPrice[3]}
        newPrice={newPrice[3]}
      />              
      </div>
    </>
  );


}

export default App
 