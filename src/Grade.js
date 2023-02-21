export default function Grade(props) {
    return (
<div
onClick={() => props.grade(props.memoId, props.id)}
className={props.class}
style={props.style}
>
{props.content}
</div>
    )
}