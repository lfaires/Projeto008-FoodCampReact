{/*import React from "react"
import Counters from "./Counters"

function Orders(props) {
    const { categories } = props
    const {foods, beverages, desserts} = props.menu
        
    const [counter, setCounter] = React.useState(0)
    const [selected, setSelected] = React.useState(false)

    function add() {
        if(selected) {
            setCounter(counter+1)
            setSelected(true)
        }
    }

    function remove() {
        if(counter === 0){
            setCounter(0)
        } else {
            setCounter(counter-1)
        }
    }

    return(
        <div className="orders">
            <div className="orders-top">
                <p>{props.heading}</p>
            </div>
            <div className="orders-body">
                <ul className={"order-" + props.type}>
                {
                    foodsMenu.map((item) => 
                    <li className={item.dishes + " " + (counter === 0 ? "" : (activate? "select" : ""))} onClick={selected}>  
                        <Details dishes={item.dishes} altImg={item.altImages} title={item.title} text={item.text} /> 
                        <div>
                            <Price price={item.price}/>
                            {counter !== 0 ? <Counters add={add} remove={remove} counter={counter} />: null} 
                        </div>
                    </li> )
                } 
                </ul>
            </div>
        </div>
    )
}*/}