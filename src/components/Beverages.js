import React from "react"
import Item from "./Item"

export default function Beverages(props) {
    const beverages = props.menu
    const setSelected = props.selected
    const setBeverage = props.setBeverage
    const beverage = props.beverage

    return (
        <div className="orders">
        <div className="orders-top">
            <p>Agora, sua bebida</p>
        </div>
        <div className="orders-body">
            <ul className="order-beverage">
                {
                    beverages.map((item) => <Item item={item} selected={setSelected} setOption={setBeverage} option={beverage}/>)
                } 
            </ul>    
        </div>
        </div>
    )
}