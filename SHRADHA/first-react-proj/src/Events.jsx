function OnClickButton(){
    console.log("Hello I'm onClick Events")
}

function DblEvent() {
     console.log("onDoubleClick button was clicked")
}


export default function Events() {
    return (
        <div>
        <button onClick={OnClickButton}>click</button>
        <button onDoubleClick={DblEvent}>dblclick</button>
        </div>
    )
}