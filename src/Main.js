import Scorebar from "./Scorebar.js"

export default function Main(props) {
    return (
        <div className="main-container">
            <p>Guess the answer, check it and grade it</p>
            <Scorebar 
            score = {props}
            />
            {props.content}
        </div>
    )
}