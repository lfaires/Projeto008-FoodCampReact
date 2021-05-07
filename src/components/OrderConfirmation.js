export default function OrderConfirmation(props) {
    return(
        <div className="confirmation">
            <div>
                <span className="food">Frango Yin Yang</span><span className="food-price">R$ 10,00</span>
            </div>
        
            <div>
                <span className="beverage">Budweiser</span><span className="beverage-price">R$ 10,00</span>
            </div>
            
            <div>
                <span className="dessert">Pudim</span><span className="dessert-price">R$ 5,00</span>
            </div>
            
            <div>
                <span><strong>TOTAL</strong></span><span className="total">R$ 25,00</span>
            </div>
        </div>
    )
}