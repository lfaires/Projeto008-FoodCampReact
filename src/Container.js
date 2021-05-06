import Foods from "./components/Foods"
import Beverages from "./components/Beverages"
import Desserts from "./components/Desserts"

export default function Container() {  
    return (
        <div className="container">
            <Foods />
            <Beverages />
            <Desserts />
        </div>
    )
}