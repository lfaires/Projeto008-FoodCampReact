export default function Foods() {
    const foodsMenu = 
    [{food: "chicken", dishes: "Frango Yin Yang", altImages: "chicken, fries, salad and sauce", description: "Um pouco de batata, um pouco de salada", price: "16,90"},
    {food: "beef", dishes: "Picanha do Chef", altImages: "four delicious beefs", description: "Suculenta picanha, arroz e vinagrete", price: "64,99"},
    {food: "future", dishes: "Futuro Frango", altImages: "frango futuro packaging", description: "Opção de frango vegetariana", price: "23,50"}]

    return (
        <div className="orders">
        <div className="orders-top">
            <p>Primeiro, sua comida</p>
        </div>
        <div className="orders-body">
            <ul className="order-food">
                {foodsMenu.map((foodMenu) => 
                <li className={foodMenu.food} onClick="activeOrderFood('.chicken')">   
                    <img src={"assets/images/" + foodMenu.food + ".jpg"} alt={foodMenu.altImages} />
                    
                    <div> <p className="dishes">{foodMenu.dishes}</p> </div>
                        
                    <div> <p className="description">{foodMenu.description}</p> </div>
                        
                    <div>
                        <span><span>&#82;&#36;&nbsp;</span><span className="price">{foodMenu.price}</span></span>
                        <ion-icon className="checkicon" name="checkmark-circle"></ion-icon>
                    </div>
                </li> )} 
            </ul>    
        </div>
        </div>
    )
}

