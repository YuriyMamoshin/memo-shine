import { useState } from "react";
import Form from "./Form";
import Memo from "./Memo";
import { nanoid } from "nanoid";

export default function Start() {

    const [data, setData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function collectData(event) {
        let value = event.target.value;
        setData([value]);
    }

    function processData(event) {
        event.preventDefault();
            setIsSubmitted(true);

        setData(oldData => {
            const dataArray = oldData[0].split(/\r?\n/);
            return dataArray.map(piece => ({
                id: nanoid(),
                answer: piece.split(" - ")[0],
                definition: piece.split(" - ")[1],
            }))
        })
    }



    const memos = data.map(memo => {
        return  <Memo
        key={memo.id}
            answer={memo.answer}
            definition={memo.definition}
        />
    })
  
console.log(memos);

    return (
        <div >
            {!isSubmitted ?
                <Form
                    data={data}
                    collect={collectData}
                    process={processData}
                /> :
                 memos
            }

        </div>
    );
}