import OrderConfirmation from "./OrderConfirmation"
import ReviewButton from "./ReviewButton"

export default function ConfirmationScreen(props) {
    window.scroll(0,0)
    const {nextScreen, food, beverage, dessert} = props

    return (
        <div className="confirm-container">
            <div className="orders-top">
                <p>Revise seu pedido</p>
            </div>
            <OrderConfirmation food={food} beverage={beverage} dessert={dessert} />
            <ReviewButton nextScreen={nextScreen} food={food} beverage={beverage} dessert={dessert}/>
        </div>
    )
}



