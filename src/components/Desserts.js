import React from "react"
import Item from "./Item"

export default function Desserts(props) {
    const desserts = props.menu
    const setSelected = props.selected

    return (
        <div className="orders">
        <div className="orders-top">
            <p>Por fim, sua sobremesa</p>
        </div>
        <div className="orders-body">
            <ul className="order-dessert">
                {
                    desserts.map((item) => <Item item={item} selected={setSelected}/>)
                } 
            </ul>     
        </div>
        </div>
    )
}