/* eslint-disable react/prop-types */
import {TicketNum} from "./TicketNum";

// eslint-disable-next-line react/prop-types
export default function Ticket({ticket}){

    return (<div className="Ticket">
        {ticket.map((num,idx)=>{
            <TicketNum num={num} key={idx}></TicketNum>
        })}
     </div>)
}