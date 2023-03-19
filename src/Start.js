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
            const filteredArray = dataArray.filter(piece => ~piece.indexOf(" - "))
            return filteredArray.map(piece => ({
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

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function refreshData() {
        const shuffledArray = shuffle(answers.incorrectAnswers);
        setData(shuffledArray.map(piece => ({
            ...piece,
            checked: false
        })));
        setAnswers({ correctAnswers: [], incorrectAnswers: [] });
    }

    let stage;


    stage = <Form
        data={data}
        collect={collectData}
        process={processData}
    />;


    if (isSubmitted && data.length) {
        stage = memos;
    } else if (isSubmitted && !data.length) {
        stage = <Result
            correct={answers.correctAnswers}
            refresh={refreshData}
        />;
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