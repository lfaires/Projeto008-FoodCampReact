export default function ReviewButton(props) {
    
    function backToOrderScreen() {
        props.nextScreen(false)
    }

    const message = `
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang (2x)
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27.70`;

    function urlMessage(){
        return encodeURIComponent(message)
    }

    return(
        <div>
            <button class="confirm"> <a class="message" href={`https://wa.me/5521990624815?text=${urlMessage()}`}> Tudo certo, pode pedir!</a></button>
            <button class="cancel" onClick={backToOrderScreen} >Cancelar</button>
        </div>
    )
}