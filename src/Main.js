import Scorebar from "./Scorebar.js"

export default function Main(props) {
    return (
        <div className="main-container">
           
           
           {props.defineStage().id > 1 && props.defineStage().id < 4 && <Scorebar
                score={props}
                isScoreShown={props.isScoreShown}
            />
            } 


            {props.content}
        </div>
    )
}