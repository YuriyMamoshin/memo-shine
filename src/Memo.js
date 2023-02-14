export default function Memo(props) {
    return (
        <div className="memo-container">
            <div>{props.answer}</div>
            <div>{props.definition}</div>
        </div>
    )
}