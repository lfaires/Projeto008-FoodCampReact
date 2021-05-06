import React from "react"

export default function Beverages() {
    const beveragesMenu = 
    [{beverage: "coke", dishes: "Refrigerante", altImages: "Coke can", description: "Lata 350 ml a partir de R$ 4,90", price: "4,90"},
    {beverage: "bud", dishes: "Budweiser", altImages: "Budweiser can", description: "350 ml da cerveja que conquistou o Brasil", price: "8,00"},
    {beverage: "mate", dishes: "Mate leão", altImages: "mate leão bottle and trees behind", description: "330 ml da bebida que é a cara do carioca", price: "6,75"}]
    
    const [counter, setCounter] = React.useState(0)

    function add() {
        setCounter(counter+1)
    }

    function remove() {
        if(counter === 0){
            setCounter(0)
        } else {
        setCounter(counter-1)
        }
    }

    return (
        <div className="orders">
        <div className="orders-top">
            <p>Agora, sua bebida</p>
        </div>
        <div className="orders-body">
            <ul className="order-beverage">
                {beveragesMenu.map((beverageMenu) => 
                <li className={beverageMenu.beverage} >   
                    <img src={"assets/images/" + beverageMenu.beverage + ".jpg"} alt={beverageMenu.altImages} />
                    
                    <div> <p className="dishes">{beverageMenu.dishes}</p> </div>
                        
                    <div> <p className="description">{beverageMenu.description}</p> </div>
                        
                    <div>
                        <div>
                            <span><span>&#82;&#36;&nbsp;</span><span className="price">{beverageMenu.price}</span></span>
                        </div>
                        <div className="counter" >
                            <div className="minus" ><ion-icon onClick={remove} name="remove-outline"></ion-icon></div>
                            <div>{counter}</div>
                            <div className="plus"><ion-icon onClick={add} name="add-outline"></ion-icon></div>
                        </div>    
                    </div>
                </li> )} 
            </ul>    
        </div>
        </div>
    )
}