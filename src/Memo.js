export default function Memo(props) {
    return (
        <div
            className="memo-container"
            style={{ display: props.hidden ? "none" : "" }}
        >
            <div className="grade-button correct-button" onClick={props.grade}>Correct</div>
            <div className="memo-answer" onClick={props.check}>{props.answer}</div>
            <div className="grade-button incorrect-button" onClick={props.grade}>Incorrect</div>

            <div className="memo-definition">{props.definition}</div>
        </div>
    )
}