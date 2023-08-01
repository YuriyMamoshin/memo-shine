

export default function Result(props) {
    const correctArray = props.answers.correctAnswers.map(obj => obj.answer);
    const correctString = correctArray.join(", ");

    return (


            <div className="result-container vertical-flex-container">

                <div className="memo-button result-text">
                    {correctString ? <div> You have answered these questions correctly:
                        <p> {correctString} </p> </div> :
                        <p>You have no correct answers</p>
                    }
                </div>


    <button className="control-button" onClick={props.refresh}>{props.isFinishShown ? "Finish" : "Next stage"}</button> 



            </div>





    )
}