import Grade from "./Grade"

export default function Memo(props) {
    return (
        <div
            className="memo-container"
        >

            <Grade
                grade={props.grade}
                class="grade-button correct-button"
                style={{ visibility: props.checked ? "visible" : "hidden" }}
                content="Correct"
                memoId={props.memoId}
                id={1}
            />
            <Grade
                grade={props.grade}
                class="grade-button incorrect-button"
                style={{ visibility: props.checked ? "visible" : "hidden" }}
                content="Incorrect"
                memoId={props.memoId}
                id={0}
            />

            <div className="memo-answer" onClick={props.check}>{props.answer}</div>
            <div className="memo-definition">{props.definition}</div>
        </div>
    )
}