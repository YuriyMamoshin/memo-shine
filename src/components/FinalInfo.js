export default function FinalInfo({index, stats}) {

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
        <div className={"finish-card card " + defineClass(index)}>Attempt №{index + 1}: {stats.map(obj => obj.answer).join(", ")}</div>

    )
}