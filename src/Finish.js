import FinalInfo from "./FinalInfo"


export default function Finish(props) {


    console.log(props.stats.length);
    return (
        <div>

            {!props.statsShown ?
                <button className="control-button"onClick={props.showStats}>Show stats</button>
                :
                
                <div>
                    <FinalInfo
                        stats={props.stats[0]}
                    />
                    {props.stats.length > 1 &&
                        <FinalInfo
                            stats={props.stats[1]}
                        />
                    }
                    {props.stats.length > 2 &&
                        <FinalInfo
                            stats={props.stats[2]}
                        />
                    }

                </div>
            }

        </div>
    )

}