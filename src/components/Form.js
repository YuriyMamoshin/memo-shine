export default function Form({data, collect, process}) {
    return (
        <div className="form-block vertical-flex-container">
            <p className="form-block__request">We expect some dash-separated list here"</p>
            <form className="vertical-flex-container">
                <textarea
                    className="form-block__textarea"
                    value={data}
                    onChange={event => collect(event)}
                />
                <div className="control-button" onClick={process}> Send data</div>
            </form>
        </div>

    )
}

