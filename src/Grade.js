export default function Grade(props) {
    return (
<div
onClick={props.grade}
className={props.class}
style={props.style}
id={props.id}
>
{props.content}
</div>
    )
}