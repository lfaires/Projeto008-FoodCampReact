import Foods from "./Foods"
import Beverages from "./Beverages"
import Desserts from "./Desserts"
import Orders from "./Orders"

export default function Container(props) {  
    const categories = [
        {
            type: "food", 
            heading: "Primeiro, sua comida",
        },{
            type: "beverage", 
            heading: "Agora, sua bebida",
        },{
            type: "dessert", 
            heading: "Por fim, sua sobremesa",
        }]
    
    return (
        <div className="container">
            {/*{categories.map( (category) => <Orders type={category.type} heading={category.heading} />)}*/}
            <Foods />
            <Beverages />
            <Desserts />
        </div>
    )
}
