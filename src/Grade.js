export default function Grade(props) {
    return (
<div
onClick={() => props.grade(props.memoId, props.id)}
className={"grade " + props.class}
style={props.style}
>
    <p>{props.content}</p>
</div>
    )
}