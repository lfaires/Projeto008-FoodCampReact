import React from "react"
export default function Counters(props) {
   
    return (
        <div className="counter" >
            <div className="minus" ><ion-icon onClick={props.remove} name="remove-outline"></ion-icon></div>
            <div>{props.counter}</div>
            <div className="plus"><ion-icon onClick={props.add} name="add-outline"></ion-icon></div>
        </div> 
    )
}