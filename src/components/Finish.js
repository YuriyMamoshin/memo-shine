import FinalInfo from "./FinalInfo"
import { nanoid } from "nanoid"

export default function Finish({stats, statsShown, showStats}) {

    const finalInfos = stats.map((statsPiece, index) => (
        <FinalInfo
        key={nanoid()}
        stats={statsPiece}
        index={index}
    />
    ))


    return (
        <div className="finish-container vertical-flex-container">

            {!statsShown ?
                <button className="control-button"onClick={showStats}>Show stats</button>
                :     
                <div>
                    {finalInfos}
                </div>
            }

        </div>
    )

}