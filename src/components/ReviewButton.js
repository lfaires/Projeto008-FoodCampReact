export default function ReviewButton(props) {
    const {food, beverage, dessert} = props

    function backToOrderScreen() {
        props.nextScreen(false)
    }

    const message = `
        Olá, gostaria de fazer o pedido:
        ${food.map( item => "-Prato: " + item.title + "(" + item.amount + "x)")}
        ${beverage.map( item => "-Bebida: " + item.title + "(" + item.amount + "x)")}
        ${dessert.map( item => "-Sobremesa: " + item.title + "(" + item.amount + "x)")}
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