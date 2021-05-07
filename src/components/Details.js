export default function Details(props) {
    return (
        <>
            <img src={"assets/images/" + props.food + ".jpg"} alt={props.altImg} />
            <div> <p className="dishes">{props.dishes}</p> </div>
            <div> <p className="description">{props.description}</p> </div>
        </>
    )
}