 
import Product from "./Product";
  
function ProductTab() {
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
     
    return (
        
        <div style={styles}> 
            <Product title={"Logitech MX Master"} idx={0}></Product>
            <Product title={"Apple Pencil (2nd Gen"} idx={1}></Product>
            <Product title={"Zebronics Zeb "} idx={2}></Product>
        </div>
    )
}

export default ProductTab;