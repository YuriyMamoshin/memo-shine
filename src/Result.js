export default function Result(props) {
    const correctArray = props.correct.map(obj => obj.answer);
    const correctString = correctArray.join(", ");

    return (
        <div className="result-container">
            {correctString ? <p> You have answered these questions correctly, so you might delete them from database as fully learned:
                <p> {correctString} </p> </p> :
                <p>You have no correct answers</p>
                }
              
            <button onClick={props.refresh}>Next stage</button>
        </div>
    )
}