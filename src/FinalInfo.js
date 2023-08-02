export default function FinalInfo(props) {

    function defineClass(index) {
        if (index === 0) {
            return "finish-card_green";
        } else if (index === 1) {
            return "finish-card_yellow";
        } else {
            return "finish-card_red";
        }
    }
    return (
        <div className={"finish-card card " + defineClass(props.index)}>Attempt №{props.index + 1}: {props.stats.map(obj => obj.answer).join(", ")}</div>

    )
}