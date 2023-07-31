export default function FinalInfo(props) {
    console.log(props.stats);
    return (
        <div>{props.stats.map(obj => obj.answer).join(", ")}</div>
        // <div>noting really</div>
    )
}