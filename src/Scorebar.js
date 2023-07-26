export default function Scorebar(props) {

    let answeredQuestionsQuantity = props.score.correctAnswers.length + props.score.incorrectAnswers.length;
    let questionsQuantity = props.score.data.length + answeredQuestionsQuantity;
   

    return (
        <div className="scorebar">


            <p>Score:</p>
            <p className="scorebar__correct">{props.score.correctAnswers.length}</p>
            <p className="scorebar__incorrect">{props.score.incorrectAnswers.length}</p>
            <p>Done: { (answeredQuestionsQuantity / questionsQuantity * 100).toFixed(0)}% </p>
<div className="scorebar__progressbar">
    
<div className="scorebar__progress" style={{width: answeredQuestionsQuantity / questionsQuantity * 100 + '%'}}></div>  
</div>

            {/* <p>out of {props.score.data.length + props.score.correctAnswers.length + props.score.incorrectAnswers.length}</p>
            <p>{props.score.data.length} left</p> */}


        </div>
    )
}