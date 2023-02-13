import { useState } from "react";

export default function Start() {

const [data, setData] = useState([]);

function collectData(event) {
    let value = event.target.value;
    setData(value);
}

function processData(event) {
    event.preventDefault();
}
    return (
        <div >
        <form className="start-container">
           
            <textarea value={data}
                cols="100" rows="50" placeholder="Please, add some data"
                onChange={collectData}
                />
            <button>Send data</button>
        </form>
        </div>
    );
}