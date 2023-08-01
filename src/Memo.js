import Grade from "./Grade"

export default function Memo(props) {
    return (
        <div className="memo-container">
            {!props.checked ? 
            <div className="grade-button memo" onClick={props.check}>Check</div> :
                <div className="grade-container">
                    <Grade
                        grade={props.grade}
                        class="grade-button correct-button memo"
                        style={{ visibility: props.checked ? "visible" : "hidden" }}
                        content="Yes"
                        memoId={props.memoId}
                        id={1}
                    />
                    <Grade
                        grade={props.grade}
                        class="grade-button incorrect-button memo"
                        style={{ visibility: props.checked ? "visible" : "hidden" }}
                        content="No"
                        memoId={props.memoId}
                        id={0}
                    />
                </div>}

            <div className="memo-answer memo">{
                props.checked ? props.answer : "???"
            }
            </div>
            <div className="memo-definition memo">{props.definition}</div>
        </div>
    )
}