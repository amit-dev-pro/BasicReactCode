import { randomTicket,sum } from './Helper'
import './Lottery.css'
import { useState } from "react"

export default function Lottery(){
    let [ticket,SetTicket]=useState(randomTicket(3))
    let isWinning=sum(ticket)===15


    let generatedTicket=()=>{
        SetTicket(randomTicket(3))
    }



    return (<div>
        <h1>Lottery Games</h1>
        <div className="lottery">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br></br>
        <button onClick={generatedTicket}>Generate Ticket</button>
        <h2 style={{color:"green"}}>{isWinning && "Congratulation , You won !"}</h2>
    </div>)
}