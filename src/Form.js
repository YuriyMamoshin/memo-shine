export default function Form(props) {
    return (
        <div className="form-block vertical-flex-container">
            <p className="form-block__request">We expext some dash-separated list here"</p>
            <form className="vertical-flex-container">
                <textarea
                    className="form-block__textarea"
                    value={props.data}
                    onChange={event => props.collect(event)}
                />
                <div className="control-button" onClick={props.process}> Send data</div>
            </form>
        </div>

    )
}

