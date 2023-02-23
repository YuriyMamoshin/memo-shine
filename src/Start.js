import { useState } from "react";
import Form from "./Form";
import Memo from "./Memo";
import { nanoid } from "nanoid";
import Sidebar from "./Sidebar";
import Result from "./Result";

export default function Start() {

    const [data, setData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [answers, setAnswers] = useState({ correctAnswers: [], incorrectAnswers: [] });

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

    function gradeAnswer(id, gradeId) {
        setData(oldData => {
            const result = oldData.reduce((res, memo) => {
                res[memo.id !== id ? "residualMemos" : "gradedMemo"].push(memo);
                return res;
            }, { residualMemos: [], gradedMemo: [] })
            setAnswers(oldAnswers => {
                return gradeId ?
                    {
                        ...oldAnswers,
                        correctAnswers: [
                            ...oldAnswers.correctAnswers, answers[oldAnswers.correctAnswers.length] = result.gradedMemo[0]
                        ]
                    } :
                    {
                        ...oldAnswers,
                        incorrectAnswers: [
                            ...oldAnswers.incorrectAnswers, answers[oldAnswers.incorrectAnswers.length] = result.gradedMemo[0]
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
            grade={gradeAnswer}
            memoId={memo.id}
        />
    })

    let stage = <Form
        data={data}
        collect={collectData}
        process={processData}
    />;

    if (isSubmitted && data.length) {
        stage = memos;
    } else if (isSubmitted && !data.length) {
        stage = <Result />;
    }

    return (
        <div className="start-container">
            <div className="main-container">
                {stage}
            </div>
            <Sidebar
                correctAnswers={answers.correctAnswers}
                incorrectAnswers={answers.incorrectAnswers}
                data={data}
            />
        </div>
    );
}