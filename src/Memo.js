import Grade from "./Grade"

export default function Memo(props) {
    return (
        <div className="memo-container">
            {!props.checked ? 

            <div className="grade-button card vertical-flex-container" onClick={props.check}>Check</div> :

                <div className="grade-container">
                    <Grade
                        grade={props.grade}
                        class="correct-button"
                        style={{ visibility: props.checked ? "visible" : "hidden" }}
                        content="Yes"
                        memoId={props.memoId}
                        id={1}
                    />
                    <Grade
                        grade={props.grade}
                        class="incorrect-button"
                        style={{ visibility: props.checked ? "visible" : "hidden" }}
                        content="No"
                        memoId={props.memoId}
                        id={0}
                    />
                </div>}

            <div className="memo-answer card vertical-flex-container"><p className="pink">{ props.checked ? props.answer : "???"}</p></div>
            <div className="memo-definition card vertical-flex-container"><p className="pink">{props.definition}</p></div>

        </div>
    )
}