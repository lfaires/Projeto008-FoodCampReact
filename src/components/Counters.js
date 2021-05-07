import React from "react"
export default function Counters(props) {
    const {add, remove, counter} = props
   
    return (
        <div className="counter" >
            <div className="minus" ><ion-icon onClick={(e) => {remove(); e.stopPropagation()} } name="remove-outline"></ion-icon></div>
            <div>{counter}</div>
            <div className="plus"><ion-icon onClick={(e) => {add(); e.stopPropagation()}} name="add-outline"></ion-icon></div>
        </div> 
    )
}
