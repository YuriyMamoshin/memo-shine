export default function Grade({grade, memoId, id, style, gradeClass, content}) {
    return (
<div
onClick={() => grade(memoId, id)}
className={"grade grade-button vertical-flex-container " + gradeClass}
style={style}
>
    <p>{content}</p>
</div>
    )
}