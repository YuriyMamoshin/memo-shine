export default function Memo(props) {
    return (
        <div
            className="memo-container"
        >
            <div 
            className="grade-button correct-button" 
            onClick={props.grade}
            style={{ visibility: props.checked ? "visible" : "hidden" }}
            >Correct</div>
            <div 
            className="grade-button incorrect-button" 
            onClick={props.grade}
            style={{ visibility: props.checked ? "visible" : "hidden" }}
            >Incorrect</div>

            <div className="memo-answer" onClick={props.check}>{props.answer}</div>
            <div className="memo-definition">{props.definition}</div>
        </div>
    )
}