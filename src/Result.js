

export default function Result(props) {
    const correctArray = props.answers.correctAnswers.map(obj => obj.answer);
    const correctString = correctArray.join(", ");

    return (


            <div className="result-container">

                <div className="memo-button result-text">
                    {correctString ? <div> You have answered these questions correctly, so you might want to delete them from database:
                        <p> {correctString} </p> </div> :
                        <p>You have no correct answers</p>
                    }
                </div>

                <button className="control-button" onClick={props.refresh}>Next stage</button>


            </div>





    )
}