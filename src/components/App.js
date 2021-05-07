import React from "react"
import Header from "./Header";
import Container from "./Container"
import Footer from "./Footer";
import ConfirmationScreen from "./ConfirmationScreen"

export default function App() {
    const [validation, setValidation] = React.useState(false);
    const [allSelected, setAllSelected] = React.useState(false);
    const [foodOrdered, setFoodOrdered] = React.useState("");
    const [beverageOrdered, setBeverageOrdered] = React.useState("");
    const [dessertOrdered, setDessertOrdered] = React.useState("");
    return (
        <>
            <Header />
            { !validation ? <Container selected={setAllSelected}/> : <ConfirmationScreen nextScreen={setValidation} food={foodOrdered} beverage={beverageOrdered} dessert={dessertOrdered}/>}
            { !validation ? <Footer Button={allSelected} nextScreen={setValidation}/> : ""}
        </>
    )
}