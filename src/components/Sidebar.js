export default function Sidebar({isFormSubmitted, isScoreShown, data, toggleScorebar}) {


    return (
        <div className="sidebar vertical-flex-container">
          {  isFormSubmitted && !!data.length &&
          <button className="control-button" onClick={toggleScorebar}>{!isScoreShown ? "Show" : "Hide"} the score</button> 
          }


        </div>
    )
}