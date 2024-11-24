import Price from "./Price";
import "./Product.css";
 
// eslint-disable-next-line react/prop-types
function Product ({title,idx}) {
    let oldPrice=["9,299","9,000","12,000"]
    let newPrice=["6,299","8,199","10,999"]
    let description=[
        ["8,000 DPI","5 Programmable buttons"],
        ["intuitive surface","designed for iPad pro"],
       ["designed for iPad pro","intuitive surface"]
    ]
 
    return (
        <div className="product">
              
             <h4>{title}</h4>
             <p>{description[idx][0]}</p>
             <p>{description[idx][1]}</p>
             <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    );
}

export default Product;