export default function Footer() {
    return (
        <footer className="bottom">
          <button className="select-item">Selecione os 3 itens <br />para fechar o pedido</button> 
          <button className="checkout-order hide" onClick="confirmOrder()">Fechar pedido</button>
        </footer>
    )
}