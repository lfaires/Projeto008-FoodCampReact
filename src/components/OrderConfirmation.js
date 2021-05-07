export default function OrderConfirmation(props) {
    const {food, beverage, dessert} = props

    return(
        <div className="confirmation">

            {food.map( item => 
                
            <div>
                <span className="food">{item.title}</span><span className="food-price">({item.amount}x) R$ {item.price}</span>
            </div>
                
                )}

            {beverage.map( item => 
                    
            <div>
                <span className="beverage">{item.title}</span><span className="food-price">({item.amount}x) R$ {item.price}</span>
            </div>
                
                )}

            {dessert.map( item => 
                
            <div>
                <span className="dessert">{item.title}</span><span className="food-price">({item.amount}x) R$ {item.price}</span>
            </div>
                
                )}

            <div>
                <span><strong>TOTAL</strong></span><span className="total">R$ 25,00</span>
            </div>
        </div>
    )
}