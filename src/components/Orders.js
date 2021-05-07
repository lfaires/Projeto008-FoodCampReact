import React from "react"
import Counters from "./Counters"

function Orders(props) {
    let menu = [
            {type: "food", options: [
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
                price: "23,50"}]}, 
            
            {type: "beverage", options: [
            {
                beverage: "coke", 
                dishes: "Refrigerante", 
                altImages: "Coke can", 
                description: "Lata 350 ml a partir de R$ 4,90", 
                price: "4,90"
            },{
                beverage: "bud", 
                dishes: "Budweiser", 
                altImages: "Budweiser can", 
                description: "350 ml da cerveja que conquistou o Brasil", 
                price: "8,00"
            },{
                beverage: "mate", 
                dishes: "Mate leão", 
                altImages: "mate leão bottle and trees behind", 
                description: "330 ml da bebida que é a cara do carioca", 
                price: "6,75"}]},
                
            {type: "dessert", options: [
            {
                dessert: "pudding", 
                dishes: "Pudim", 
                altImages: "american pudding", 
                description: "Pudim de leite a partir de R$ 7,90", 
                price: "7,90"
            },{
                dessert: "brownie", 
                dishes: "Brownie", 
                altImages: "several brownie pieces", 
                description: "Brownie do Luiz, o melhor da Tijuca", 
                price: "10,00"
            },{
                dessert: "cake", 
                dishes: "Bolo de pote", 
                altImages: "two pot cakes", 
                description: "Bolo de pote da vovó, feito com muito amor", 
                price: "12,00"}]}]
        
    const [counter, setCounter] = React.useState(0)
    const [activate, setActivate] = React.useState(false)

    function add() {
        if(activate) {
            setCounter(counter+1)
            setActivate(true)
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
                    <li className={menu.food}>
                        <img src={"assets/images/" + menu.food + ".jpg"} alt={menu.altImages}  />
                        <div><p className="dishes">{menu.dishes}</p></div>
                        <div><p className="description">{menu.description}</p></div>
                        <div>
                            <div>
                                <span><span>&#82;&#36;&nbsp;</span><span className="price">{menu.price}</span></span>
                            </div>
                            {<Counters add={add} remove={remove} counter={counter} />} 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}