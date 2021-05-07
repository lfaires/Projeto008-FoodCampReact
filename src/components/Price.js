export default function Price(props) {
    return (
        <div>
            <span>
                <span>&#82;&#36;&nbsp;</span>
                <span className="price">{props.price}</span>
            </span>
        </div>
    )
}