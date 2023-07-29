export default function Scorebar(props) {



    let answeredQuestionsQuantity = props.score.correctAnswers.length + props.score.incorrectAnswers.length;
    let questionsQuantity = props.score.data.length + answeredQuestionsQuantity;


    return (

        <div className="scorebar">

            {props.isScoreShown || !props.score.data.length ?
                <div className="scorebar__content">
                    <p>Score:</p>
                    <p className="scorebar__correct">{props.score.correctAnswers.length}</p>
                    <p className="scorebar__incorrect">{props.score.incorrectAnswers.length}</p>
                    <p>Done: {(answeredQuestionsQuantity / questionsQuantity * 100).toFixed(0)}% </p>
                    <div className="scorebar__progressbar">

                        <div className="scorebar__progress" style={{ width: answeredQuestionsQuantity / questionsQuantity * 100 + '%' }}></div>
                    </div>
                </div>
                :
                <div className="scorebar__content">
                    <p>1. Guess the answer.</p>
                    <p>2. Check it </p>
                    <p>3. Grade it depending on whether you were right or not</p>
                </div>

            }





        </div>
    )
}