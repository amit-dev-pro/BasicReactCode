import { useState } from "react"

function init() {
    console.log("init was called")
    return Math.random()
}

export default function Counter() {

    let styles={border:"3px solid black",borderRadius:"55px"}

    let [count,setCount]= useState(init)
    console.log("component was redered")

    let incCount=()=>{
         //setCount(count+1)
         setCount((currCount)=>{
            return currCount +1;
         });
         setCount((currCount)=>{
            return currCount +1;
         })
          
    }

    return (
        <div>
            <h1>React Counter</h1>
            <h3 style={styles}>count={count}</h3>
            <button onClick={incCount}>increase count</button>
        </div>
    )
}