export default function ConfirmButton(props) {
    function openConfirmationScreen() {
      props.openConfirmationScreen(true)
    }
    return (
      <button className="checkout-order" onClick={openConfirmationScreen}>Fechar pedido</button>
    )
  }