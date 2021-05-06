export default function Footer() {
    return (
        <footer class="bottom">
          <button className="select-item">Selecione os 3 itens <br />para fechar o pedido</button> 
          <button className="checkout-order hide" onclick="confirmOrder()">Fechar pedido</button>
        </footer>
    )
}