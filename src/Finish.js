import FinalInfo from "./FinalInfo"
import { nanoid } from "nanoid"

export default function Finish(props) {

    const finalInfos = props.stats.map((statsPiece, index) => (
        <FinalInfo
        key={nanoid()}
        stats={statsPiece}
        index={index}
    />
    ))


    return (
        <div className="finish-container vertical-flex-container">

            {!props.statsShown ?
                <button className="control-button"onClick={props.showStats}>Show stats</button>
                :     
                <div>
                    {finalInfos}
                </div>
            }

        </div>
    )

}