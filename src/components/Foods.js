import React from "react"
import Counters from "./Counters"
import Price from "./Price"
import Details from "./Details"

export default function Foods() {
    const foodsMenu = [
        {
            food: "chicken", 
            dishes: "Frango Yin Yang", 
            altImages: "chicken, fries, salad and sauce", 
            description: "Um pouco de batata, um pouco de salada", 
            price: "16,90"
        },{   
            food: "beef", 
            dishes: "Picanha do Chef", 
            altImages: "four delicious beefs", 
            description: "Suculenta picanha, arroz e vinagrete", 
            price: "64,99"
        },{ 
            food: "future", 
            dishes: "Futuro Frango", 
            altImages: "frango futuro packaging", 
            description: "Opção de frango vegetariana", 
            price: "23,50"}]

    
    const [counter, setCounter] = React.useState(0)
    const [activate, setActivate] = React.useState(false)

    function add() {
        if(activate) {
            setCounter(counter+1)
        }
    }

    function remove() {
        if(activate && counter === 0){
            setCounter(0)
            setActivate(false)
        } else {
            setCounter(counter-1)
            setActivate(true)
        }
    }

    function selected() {
        if(activate === false && counter === 0) {
            setCounter(counter+1)
            setActivate(true)
        } else if(counter === 0){
            setActivate(false)
        }
    }

    return (
        <div className="orders">
        <div className="orders-top">
            <p>Primeiro, sua comida</p>
        </div>
        <div className="orders-body">
            <ul className="order-food">
                {foodsMenu.map((foodMenu) => 
                <li className={foodMenu.food + " " + (counter === 0 ? "" : (activate? "active" : ""))} onClick={selected}>  
                    <Details food={foodMenu.food} altImg={foodMenu.altImages} dishes={foodMenu.dishes} description={foodMenu.description} /> 
                    <div>
                        <Price price={foodMenu.price}/>
                        {counter !== 0 ? <Counters add={add} remove={remove} counter={counter} />: null} 
                    </div>
                </li> )} 
            </ul>    
        </div>
        </div>
    )
}