import React from "react"
export default function Amount(props) {
    const {add, remove, amount} = props
   
    return (
        <div className="amount" >
            <div className="minus" ><ion-icon onClick={(e) => {remove(); e.stopPropagation()} } name="remove-outline"></ion-icon></div>
            <div>{amount}</div>
            <div className="plus"><ion-icon onClick={(e) => {add(); e.stopPropagation()}} name="add-outline"></ion-icon></div>
        </div> 
    )
}
