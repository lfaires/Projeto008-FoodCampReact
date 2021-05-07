import React from "react"
import Item from "./Item"

export default function Foods(props) {
    const foods = props.menu
    const setSelected = props.selected
    
    return (
        <div className="orders">
        <div className="orders-top">
            <p>Primeiro, sua comida</p>
        </div>
        <div className="orders-body">
            <ul className="order-food">
                {
                    foods.map((item) => <Item item={item} selected={setSelected}/>)
                } 
            </ul>    
        </div>
        </div>
    )
}

