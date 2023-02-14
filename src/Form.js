export default function Form(props) {
    return (
        <form className="form-container" onSubmit={event => props.process(event)}>
        <textarea value={props.data}
            cols="100" rows="50" placeholder="Please, add some data"
            onChange={event => props.collect(event)}
            />
        <button>Send data</button>
    </form>
    )
}