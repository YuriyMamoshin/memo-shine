import Grade from "./Grade"

export default function Memo(props) {
    return (
        <div
            className="memo-container"
        >

            <Grade
                grade={props.grade}
                class="grade-button correct-button memo-button"
                style={{ visibility: props.checked ? "visible" : "hidden" }}
                content="Correct"
                memoId={props.memoId}
                id={1}
            />
            <Grade
                grade={props.grade}
                class="grade-button incorrect-button memo-button"
                style={{ visibility: props.checked ? "visible" : "hidden" }}
                content="Incorrect"
                memoId={props.memoId}
                id={0}
            />

            <div className="memo-answer memo-button" onClick={props.check}>{
                props.checked ? props.answer : "???"
            }
            </div>
            <div className="memo-definition memo-button">{props.definition}</div>
        </div>
    )
}