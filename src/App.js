import { useState } from "react";
import Form from "./Form";
import Memo from "./Memo";
import { nanoid } from "nanoid";
import Sidebar from "./Sidebar";
import Result from "./Result";
import Main from "./Main";

import shuffle from "./shuffle.js";

export default function App() {

    const [initData, setInitData] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [answers, setAnswers] = useState({ correctAnswers: [], incorrectAnswers: [] });

    const [isScoreShown, setIsScoreShown] = useState(false);

    function collectData(event) {
        let formValue = event.target.value;
        setInitData([formValue]);
    }

    function toggleScorebar() {
        setIsScoreShown(isShown => !isShown)
    }

    function processData(event) {
        event.preventDefault();
        setIsFormSubmitted(true);

        setInitData(oldData => {
            const dataArray = oldData[0].split(/\r?\n/);
            const filteredArray = dataArray.filter(piece => piece.includes(" - "));

            return filteredArray.map(piece => {
                let [answer, definition] = piece.split(" - ");

                return {
                    id: nanoid(),
                    answer: answer,
                    definition: definition,
                    checked: false
                }
            })
        })
    }

    function checkAnswer(id) {
        setInitData(oldData => {
            return oldData.map(memo => {
                return memo.id === id ?
                    { ...memo, checked: true } :
                    memo
            })
        })
    }

    function gradeAnswer(id, gradeId) {
        setInitData(oldData => {

            const memosArray = oldData.reduce((res, memo) => {
                res[memo.id !== id ? "residualMemos" : "gradedMemo"].push(memo);
                return res;
            }, { residualMemos: [], gradedMemo: [] })

            setAnswers(oldAnswers => {
                return gradeId ?
                    {
                        ...oldAnswers,
                        correctAnswers: [
                            ...oldAnswers.correctAnswers, memosArray.gradedMemo[0]
                        ]
                    } :
                    {
                        ...oldAnswers,
                        incorrectAnswers: [
                            ...oldAnswers.incorrectAnswers, memosArray.gradedMemo[0]
                        ]
                    }
            })
            return memosArray.residualMemos;
        })
    }


    function refreshData() {
        const shuffledArray = shuffle(answers.incorrectAnswers);
        setInitData(shuffledArray.map(piece => ({
            ...piece,
            checked: false
        })));
        setAnswers({ correctAnswers: [], incorrectAnswers: [] });
    }


    const memos = initData.map(memo => {
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
        data={initData}
        collect={collectData}
        process={processData}
    />;


    if (isFormSubmitted && initData.length) {
        stage = memos;
    } else if (isFormSubmitted && !initData.length) {
        stage = <Result
            correct={answers.correctAnswers}
            refresh={refreshData}
        />;
    }



    return (
        <div>


            <div className="start">

                <Main
                    content={stage}
                    correctAnswers={answers.correctAnswers}
                    incorrectAnswers={answers.incorrectAnswers}
                    data={initData}
                    isScoreShown={isScoreShown}
                />
                <Sidebar
                    toggleScorebar={toggleScorebar}
                    isScoreShown={isScoreShown}
                    initData={initData}
                    isFormSubmitted={isFormSubmitted}
                />

            </div>


        </div>
    );
}