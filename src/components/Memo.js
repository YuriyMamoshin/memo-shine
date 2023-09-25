import Grade from "./Grade"

export default function Memo({check, grade, memoId, checked, definition, answer}) {
    return (
        <div className="memo-container">
            {!checked ? 

            <div className="grade-button card vertical-flex-container" onClick={check}>Check</div> :

                <div className="grade-container">
                    <Grade
                        grade={grade}
                        gradeClass="correct-button"
                        style={{ visibility: checked ? "visible" : "hidden" }}
                        content="Yes"
                        memoId={memoId}
                        id={1}
                    />
                    <Grade
                        grade={grade}
                        gradeClass="incorrect-button"
                        style={{ visibility: checked ? "visible" : "hidden" }}
                        content="No"
                        memoId={memoId}
                        id={0}
                    />
                </div>}

            <div className="memo-answer card vertical-flex-container"><p className="pink">{ checked ? answer : "???"}</p></div>
            <div className="memo-definition card vertical-flex-container"><p className="pink">{definition}</p></div>

        </div>
    )
}