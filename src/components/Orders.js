import Foods from "./Foods"
import Beverages from "./Beverages"
import Desserts from "./Desserts"

export default function Orders() {   
    const menu = [{type: "food", heading: "Primeiro, seu prato"}, {type: "beverage", heading: "Agora, sua bebida"}, {type: "dessert", heading: "Por fim, sua sobremesa"}]

    return (
        <>
        <Foods />
        <Beverages />
        <Desserts />
        </>
    )
}
