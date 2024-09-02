import "./Btn.css"

export default function Button(props) {
    return (
        <>
            <button className={props.back}> {props.text} </button>
        </>
    )
}