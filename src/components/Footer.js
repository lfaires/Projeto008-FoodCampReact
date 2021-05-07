import SelectButton from "./SelectButton"
import ConfirmButton from "./ConfirmButton"

export default function Footer(props) {
  return (
    <footer>
      { !props.Button ? <SelectButton /> : <ConfirmButton openConfirmationScreen={props.openConfirmationScreen}/> }
    </footer>
  )
}