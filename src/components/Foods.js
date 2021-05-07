import React from "react"
import Item from "./Item"

export default function Foods(props) {
    const foods = props.menu
    const setSelected = props.selected
    const setFood = props.setFood
    const food = props.food

    return (
        <div className="orders">
        <div className="orders-top">
            <p>Primeiro, sua comida</p>
        </div>
        <div className="orders-body">
            <ul className="order-food">
                {
                    foods.map((item) => <Item item={item} selected={setSelected} setOption={setFood} option={food}/>)
                } 
            </ul>    
        </div>
        </div>
    )
}

