export default function ReviewButton(props) {
    
    function backToOrderScreen() {
        props.openConfirmationScreen(false)
    }

    return(
        <div>
            <button class="confirm"> <a class="message" href="https://wa.me/5521990624815"> Tudo certo, pode pedir!</a></button>
            <button class="cancel" onClick={backToOrderScreen} >Cancelar</button>
        </div>
    )
}