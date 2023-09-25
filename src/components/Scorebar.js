export default function Scorebar({score, isScoreShown}) {



    let answeredQuestionsQuantity = score.correctAnswers.length + score.incorrectAnswers.length;
    let questionsQuantity = score.data.length + answeredQuestionsQuantity;


    return (

        <div className="scorebar horizontal-flex-container">

            {isScoreShown || !score.data.length ?
                <div className="scorebar__content horizontal-flex-container">
                    <p>Score:</p>
                    <p className="scorebar__correct">{score.correctAnswers.length}</p>
                    <p className="scorebar__incorrect">{score.incorrectAnswers.length}</p>
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