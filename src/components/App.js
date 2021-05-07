import React from "react"
import Header from "./Header";
import Container from "./Container"
import Footer from "./Footer";
import ConfirmationScreen from "./ConfirmationScreen"

export default function App() {
    const [validation, setValidation] = React.useState(false);
    const [allSelected, setAllSelected] = React.useState(false);

    return (
        <>
            <Header />
            { !validation ? <Container selected={setAllSelected}/> : <ConfirmationScreen openConfirmationScreen={setValidation}/>}
            { !validation ? <Footer Button={allSelected} openConfirmationScreen={setValidation}/> : ""}
        </>
    )
}