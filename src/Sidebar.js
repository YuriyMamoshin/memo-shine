export default function Sidebar(props) {


    return (
        <div className="sidebar">
          {  props.isFormSubmitted && !!props.data.length &&
          <button className="control-button" onClick={props.toggleScorebar}>{!props.isScoreShown ? "Show" : "Hide"} the score</button> 
          }


        </div>
    )
}