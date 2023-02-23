export default function Result(props) {
const correctArray = props.correct.map(obj => obj.answer);
const correctString = correctArray.join(", ");

    return (
        <div>
            You have answered these questions correctly, so you might delete them from database as fully learned:
           <p>{correctString}</p> 
            </div>
    )
}