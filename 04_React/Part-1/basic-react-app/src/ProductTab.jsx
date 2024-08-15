import Product from "./Product";
function ProductTab(){
    let feature = ["Durable","Stell Body","Highe Resolution"];
    return(
        <>
         <Product title="Phone" price={30000} features={feature}/>
         <Product title="Windows" price={60000}/>
         <Product title="Macbook"price={90000}/>
         
        </>
    )
}
export default ProductTab;
