// eslint-disable-next-line react/prop-types
export default function Price({oldPrice,newPrice}) {

    let oldStyle={
        textDecorationLine:"Line-through"
    }
    let newStyle={fontWeight:"bold"}
    let styles={
        backgroundColor:"#e0c367",height:"30px",
        borderBottomLeftRadius:"12px",
        borderBottomRightRadius:"12px"
         
    }

    return (
        <div style={styles}>
        <span style={oldStyle}>{oldPrice}</span>
        &nbsp;  &nbsp;  &nbsp; 
        <span style={newStyle}>{newPrice}</span>
        </div>
    )
}