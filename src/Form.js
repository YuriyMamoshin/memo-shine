export default function Form(props) {
    return (
        <div className="form-container">
            <p>Please, add some data, in format "answer - question"</p>
            <form className="form" onSubmit={event => props.process(event)}>
                <textarea value={props.data}
                    cols="100" rows="30"
                    onChange={event => props.collect(event)}
                />
                <button>Send data</button>
            </form>
        </div>

    )
}