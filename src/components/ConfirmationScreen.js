import OrderConfirmation from "./OrderConfirmation"
import ReviewButton from "./ReviewButton"

export default function ConfirmationScreen(props) {
    return (
        <div className="confirm-container">
            <div className="orders-top">
                <p>Revise seu pedido</p>
            </div>
            <OrderConfirmation />
            <ReviewButton openConfirmationScreen={props.openConfirmationScreen}/>
        </div>
    )
}



