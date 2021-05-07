export default function ConfirmButton(props) {
    function openNextScreen() {
      props.nextScreen(true)
    }
    return (
      <button className="checkout-order" onClick={openNextScreen}>Fechar pedido</button>
    )
  }