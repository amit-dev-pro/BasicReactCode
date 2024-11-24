import { useState } from "react"

export default function LudoBoard() {

    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})

    
    let updateMove=()=>{
        setMoves((currMoves)=>{
            return {...currMoves,blue:currMoves.blue+1}
        });
    }

    let updateMove1=()=>{
        setMoves((currMoves)=>{
            return {...currMoves,yellow:currMoves.yellow+1}
        })
    }

    let updateMove2=()=>{
        setMoves((currMoves)=>{
            return {...currMoves,green:currMoves.green+1}
        });
    }

    let updateMove3=()=>{
        setMoves((currMoves)=>{
            return {...currMoves,red:currMoves.red+1}
        })
    }
    
    return (
        <div>
            <p>Games Begins </p>
            <p>Blue Moves : {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateMove}>+1</button>
            <p>Yellow Moves : {moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateMove1}>+1</button>
            <p>Green Moves : {moves.green}</p>
            <button style={{backgroundColor:"green "}} onClick={updateMove2}>+1</button>
            <p>Red Moves : {moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateMove3}>+1</button>
        </div>
    )

}