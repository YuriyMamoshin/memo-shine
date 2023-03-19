export default function Result(props) {
    const correctArray = props.correct.map(obj => obj.answer);
    const correctString = correctArray.join(", ");

    return (
        <div className="result-container">
            <div className="memo-button result-text">
            {correctString ? <p> You have answered these questions correctly, so you might want to delete them from database:
                <p> {correctString} </p> </p> :
                <p>You have no correct answers</p>
            }
            </div>

            <button onClick={props.refresh}>Next stage</button>
        </div>
    )
}