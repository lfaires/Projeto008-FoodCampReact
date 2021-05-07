import React from "react"
import Item from "./Item"

export default function Beverages(props) {
    const beverages = props.menu
    const setSelected = props.selected
    return (
        <div className="orders">
        <div className="orders-top">
            <p>Agora, sua bebida</p>
        </div>
        <div className="orders-body">
            <ul className="order-beverage">
                {
                    beverages.map((item) => <Item item={item} selected={setSelected}/>)
                } 
            </ul>    
        </div>
        </div>
    )
}