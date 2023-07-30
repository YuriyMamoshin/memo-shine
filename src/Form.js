export default function Form(props) {
    return (
        <div className="form-block">
            <p className="form-block__request">Please, add some data, in format "answer - question"</p>
            <form className="form-block__form" onSubmit={event => props.process(event)}>
                <textarea className="form-block__textarea" 
                value={props.data} 

               
                    
                    onChange={event => props.collect(event)}
                />
                <button className="control-button">Send data</button>
            </form>
        </div>

    )
}

