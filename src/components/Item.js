import React from "react"
import Counters from "./Counters"
import Price from "./Price"
import Details from "./Details"

export default function Item(props) {
    const item = props.item
    const setSelected = props.selected
    const [counter, setCounter] = React.useState(0)
    const [activate, setActivate] = React.useState(false)

    function selected() {
        if(activate === false && counter === 0) {
            setCounter(counter+1)
            setActivate(true)
            setSelected(1)
        } else if(activate){
            setActivate(false)
            setSelected(0)
        }
    }

    function add() {
        if(activate) {
            setCounter(counter+1)
            setSelected(1)
        }
    }

    function remove() {
        if(activate && counter === 0){
            setCounter(0)
            setActivate(false)
            setSelected(0)
        } else {
            setCounter(counter-1)
            setActivate(true)
            setSelected(1)
        }
    }

    return(
        <li className={item.name + " " + (activate? "select" : "")} onClick={selected}>  
        <Details name={item.name} altImg={item.altImages} title={item.title} text={item.text} /> 
        <div>
            <Price price={item.price}/>
            {counter !== 0 ? <Counters add={add} remove={remove} counter={counter} />: ""} 
        </div>
    </li> 
    )
}