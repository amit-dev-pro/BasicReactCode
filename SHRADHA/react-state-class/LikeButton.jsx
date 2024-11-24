import { useState } from "react"

export default function LikeButton() {

    let [isLike,setisLike]=useState(false)
    let [clicks,setClicks]=useState(0)

    let toggle=()=>{
        setisLike(!isLike)
        setClicks(clicks+1)
         
    }

    let LikeHeat={color:"red"}

    return (
        <>
        <h3>Like Page</h3>
        <p>clicks={clicks}</p>
        <p onClick={toggle}>
        {
            isLike ? <i className="fa-solid fa-heart" style={LikeHeat}></i> :<i className="fa-regular fa-heart"></i>
        }
        </p>
        </>
    )
}