import Grade from "./Grade"

export default function Memo(props) {
    return (
        <div
            className="memo-container"
        >
            {/* <div
                className="grade-button correct-button"
                onClick={props.grade}
                style={{ visibility: props.checked ? "visible" : "hidden" }}
            >Correct</div>
            <div
                className="grade-button incorrect-button"
                onClick={props.grade}
                style={{ visibility: props.checked ? "visible" : "hidden" }}
            >Incorrect</div> */}

<Grade
grade={props.grade}
class="grade-button correct-button"
style={{ visibility: props.checked ? "visible" : "hidden" }}
content="Correct"
id={1}
/>
<Grade
grade={props.grade}
class="grade-button incorrect-button"
style={{ visibility: props.checked ? "visible" : "hidden" }}
content="Incorrect"
id={2}
/>

            <div className="memo-answer" onClick={props.check}>{props.answer}</div>
            <div className="memo-definition">{props.definition}</div>
        </div>
    )
}