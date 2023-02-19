import { useState } from "react";
import Form from "./Form";
import Memo from "./Memo";
import { nanoid } from "nanoid";
import Sidebar from "./Sidebar";

export default function Start() {

    const [data, setData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [answers, setAnswers] = useState({answers: []});

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
                checked: false
            }))
        })
    }

    function checkAnswer(id) {
        setData(oldData => {
            return oldData.map(memo => {
                return memo.id === id ?
                    { ...memo, checked: true } :
                    memo
            })
        })
    }

    function gradeAnswer(id) {
        setData(oldData => {
            const result = oldData.reduce((res, memo) => {
                res[memo.id !== id ? "residualMemos" : "gradedMemo"].push(memo);
                return res;
            }, { residualMemos: [], gradedMemo: [] })
            setAnswers(oldAnswers => {
                return {
                    ...oldAnswers,
                    answers: [
                        ...oldAnswers.answers, answers[oldAnswers.answers.length] = result.gradedMemo[0]
                    ]
                }
            })
            return result.residualMemos;
        })
    }


    const memos = data.map(memo => {
        return <Memo
            key={memo.id}
            answer={memo.answer}
            definition={memo.definition}
            checked={memo.checked}
            check={() => checkAnswer(memo.id)}
            grade={() => gradeAnswer(memo.id)}
        />
    })


    return (
        <div className="start-container">
            <div className="main-container">
                {!isSubmitted ?
                    <Form
                        data={data}
                        collect={collectData}
                        process={processData}
                    /> :
                    memos
                }
            </div>
            <Sidebar 
            answers={answers.answers}
            />
        </div>
    );
}