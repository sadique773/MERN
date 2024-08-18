import React from 'react'
import { useState } from 'react'
import"./lottery.css"
import { genTicket,sum } from './helper'

export default function Lottery() {

    let [Ticket,setTicket] = useState(genTicket(3))
    let isWining = sum(Ticket) === 15;

    let buyticket=()=>{
        setTicket(genTicket(3));
    }

    

  return (
    <div>
        <h1 className='heading'>LOTTERY GAME</h1>
        <div className="ticket">
        <span>{Ticket[0]}</span>
        <span>{Ticket[1]}</span>
        <span>{Ticket[2]}</span>
        </div>
        <button onClick={buyticket }>Buy Ticket</button>
        <h3>{isWining && "Congratulation You won" }</h3>
    </div>
  )
}
