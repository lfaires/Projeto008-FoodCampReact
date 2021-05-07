import React from "react"
import Foods from "./Foods"
import Beverages from "./Beverages"
import Desserts from "./Desserts"

export default function Container(props) {
    const setAllSelected = props.selected
    const [selectFood, setSelectFood] = React.useState(0)
    const [selectBeverage, setSelectBeverage] = React.useState(0)
    const [selectDessert, setSelectDessert] = React.useState(0)

        if((selectFood + selectBeverage + selectDessert) === 3){
            setAllSelected(true)
        } else {
            setAllSelected(false)
        }

    const menu = 
        { 
            foods: [
            {
                name: "chicken", 
                title: "Frango Yin Yang", 
                altImages: "chicken, fries, salad and sauce", 
                text: "Um pouco de batata, um pouco de salada", 
                price: "16,90"
            },{   
                name: "beef", 
                title: "Picanha do Chef", 
                altImages: "four delicious beefs", 
                text: "Suculenta picanha, arroz e vinagrete", 
                price: "64,99"
            },{ 
                name: "future", 
                title: "Futuro Frango", 
                altImages: "frango futuro packaging", 
                text: "Opção de frango vegetariana", 
                price: "23,50"}],
            
            beverages: [
            {
                name: "coke", 
                title: "Refrigerante", 
                altImages: "Coke can", 
                text: "Lata 350 ml a partir de R$ 4,90", 
                price: "4,90"
            },{
                name: "bud", 
                title: "Budweiser", 
                altImages: "Budweiser can", 
                text: "350 ml da cerveja que conquistou o Brasil", 
                price: "8,00"
            },{
                name: "mate", 
                title: "Mate leão", 
                altImages: "mate leão bottle and trees behind", 
                text: "330 ml da bebida que é a cara do carioca", 
                price: "6,75"}],
            
            desserts: [
            {
                name: "pudding", 
                title: "Pudim", 
                altImages: "american pudding", 
                text: "Pudim de leite a partir de R$ 7,90", 
                price: "7,90"
            },{
                name: "brownie", 
                title: "Brownie", 
                altImages: "several brownie pieces", 
                text: "Brownie do Luiz, o melhor da Tijuca", 
                price: "10,00"
            }, {
                name: "cake", 
                title: "Bolo de pote", 
                altImages: "two pot cakes", 
                text: "Bolo de pote da vovó, feito com muito amor", 
                price: "12,00"}]
        }
                

    return (
        <div className="container">
            <Foods selected={setSelectFood} menu={menu.foods}/>
            <Beverages selected={setSelectBeverage} menu={menu.beverages}/>
            <Desserts selected={setSelectDessert} menu={menu.desserts}/>
        </div>
    )
}
