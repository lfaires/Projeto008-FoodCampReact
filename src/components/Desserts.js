export default function Desserts() {
    const dessertsMenu = 
    [{dessert: "pudding", dishes: "Pudim", altImages: "american pudding", description: "Pudim de leite a partir de R$ 7,90", price: "7,90"},
    {dessert: "brownie", dishes: "Brownie", altImages: "several brownie pieces", description: "Brownie do Luiz, o melhor da Tijuca", price: "10,00"}, 
    {dessert: "cake", dishes: "Bolo de pote", altImages: "two pot cakes", description: "Bolo de pote da vovó, feito com muito amor", price: "12,00"}]
    
    return (
        <div className="orders-body">
            <ul className="order-dessert">
                {dessertsMenu.map((dessertMenu) => 
                <li className={dessertMenu.dessert} onClick="activeOrderFood('.chicken')">   
                    <img src={"assets/images/" + dessertMenu.dessert + ".jpg"} alt={dessertMenu.altImages} />
                    
                    <div> <p className="dishes">{dessertMenu.dishes}</p> </div>
                        
                    <div> <p className="description">{dessertMenu.description}</p> </div>
                        
                    <div>
                        <span><span>&#82;&#36;&nbsp;</span><span className="price">{dessertMenu.price}</span></span>
                        <ion-icon className="checkicon" name="checkmark-circle"></ion-icon>
                    </div>
                </li> )} 
            </ul>    
        </div>
    )
}