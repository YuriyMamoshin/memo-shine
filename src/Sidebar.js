export default function Sidebar(props) {


    return (
        <div className="sidebar-container">
            <p>Your score:</p>
            <p>{props.correctAnswers.length} correct answers</p>
            <p>{props.incorrectAnswers.length} incorrect answers</p>
            <p>out of {props.data.length + props.correctAnswers.length + props.incorrectAnswers.length}</p>
            <p>{props.data.length} left</p>
            

        </div>
    )
}