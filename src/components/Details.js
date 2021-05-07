export default function Details(props) {
    const {name, title, text, altImages} = props

    return (
        <>
            <img src={"assets/images/" + name + ".jpg"} alt={altImages} />
            <div> <p className="title">{title}</p> </div>
            <div> <p className="text">{text}</p> </div>
        </>
    )
}