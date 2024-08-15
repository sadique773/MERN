import "./Product.css"
function Product({title,price,features}){
    return(
        <div className="Product">
            <h3>This is my Product {title}</h3>
            <h5>{features}</h5>
            <h4>Product Price is - {price}</h4>
        </div>
    )
}
export default Product;  