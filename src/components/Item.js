import React from "react"
import Amount from "./Amount"
import Price from "./Price"
import Details from "./Details"

export default function Item(props) {
    const item = props.item
    const setSelected = props.selected
    const setOption = props.setOption
    const option = props.option
    const [amount, setAmount] = React.useState(0)
    const [activate, setActivate] = React.useState(false)
    const [firstItem, setFirstItem] = React.useState(false)
    const [SecondItem, setSecondItem] = React.useState(false)
    const items = [];
    
    function selected() {
        if(!activate && amount === 0) {
            setAmount(amount+1)
            setActivate(true)
            setSelected(1)
            setOption([...option,{title:item.title, price: item.price, amount: amount+1}])
        } else if(activate && amount === 0){
            setActivate(false)
            setSelected(0)
        } 
    }

    function add() {
        if(activate) {
            setAmount(amount+1)
            setSelected(1)
            setOption([...option,{title:item.title, price: item.price, amount: amount+1}])
        }
    }

    function remove() {
        if(amount === 1){
            setAmount(0)
            setActivate(false)
            setSelected(0)
            setOption([...option])
        } else {
            setAmount(amount-1)
            setActivate(true)
            setSelected(1)
            setOption([...option,{title:item.title, price: item.price, amount: amount-1}])
        }
    }
 
    return(
        <li className={item.name + " " + (activate? "select" : "")} onClick={selected}>  
        <Details name={item.name} altImg={item.altImages} title={item.title} text={item.text} /> 
        <div>
            <Price price={item.price}/>
            {amount !== 0 ? <Amount add={add} remove={remove} amount={amount} />: ""} 
        </div>
    </li> 
    )
}