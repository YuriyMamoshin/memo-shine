import Scorebar from "./Scorebar.js"

export default function Main(props) {
    return (
        <div className="main-container">
           
          <Scorebar 
            score = {props}
            isScoreShown={props.isScoreShown}
            /> 
            {props.content}
        </div>
    )
}