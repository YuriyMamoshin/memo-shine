export default function Memo(props) {
    return (
        <div className="memo-container">
            <div className="memo-answer">{props.answer}</div>
            <div className="memo-definition">{props.definition}</div>
        </div>
    )
}