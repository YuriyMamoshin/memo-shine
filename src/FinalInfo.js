export default function FinalInfo(props) {

    return (
        <div>{props.stats.map(obj => obj.answer).join(", ")}</div>

    )
}