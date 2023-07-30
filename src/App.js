import { useState } from "react";
import Form from "./Form";
import Memo from "./Memo";
import { nanoid } from "nanoid";
import Sidebar from "./Sidebar";
import Result from "./Result";
import Main from "./Main";
import Finish from "./Finish";

import shuffle from "./shuffle.js";

export default function App() {

    const dummyText = 
    `lorem - ipsum
dolor - sit
amet - consectetur
adipisicing - elit
repudiandae - fuga
`;

    const [data, setData] = useState([dummyText]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [answers, setAnswers] = useState({ correctAnswers: [], incorrectAnswers: [] });

    const [isScoreShown, setIsScoreShown] = useState(false);

    const [stats, setStats] = useState([]);

    function collectData(event) {
        let formValue = event.target.value;
        setData([formValue]);
    }

    function toggleScorebar() {
        setIsScoreShown(isShown => !isShown)
    }


    function processData(event) {
        event.preventDefault();
        setIsFormSubmitted(true);

        setData(oldData => {
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
 
        setStats(prevStats => {
           let newStats = [...prevStats];
           newStats[prevStats.length] = answers.correctAnswers;
           return newStats;
    });

            setData(shuffle(answers.incorrectAnswers).map(piece => ({
                ...piece,
                checked: false
            })));
        
            setAnswers({ correctAnswers: [], incorrectAnswers: [] });
          

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


    function defineStage() {
        if (isFormSubmitted && data.length) {
            return {
                id: 2,
                content: memos
            }

        } else if (isFormSubmitted && !data.length && answers.incorrectAnswers.length) {
            return {
                id: 3,
                content: <Result
                    answers={answers}
                    refresh={refreshData}
                />
            }

        } else if (isFormSubmitted && !data.length) {
            return {
                id: 4,
                content: <Finish
                />
            }

        } else {
            return {
                id: 1,
                content: <Form
                    data={data}
                    collect={collectData}
                    process={processData}
                />
            }
        }

    }


    return (
        <div>


            <div className="start">

                <Main
                    content={defineStage().content}
                    defineStage={defineStage}
                    correctAnswers={answers.correctAnswers}
                    incorrectAnswers={answers.incorrectAnswers}
                    data={data}
                    isScoreShown={isScoreShown}
                    isFormSubmitted={isFormSubmitted}
                />
                <Sidebar
                    toggleScorebar={toggleScorebar}
                    isScoreShown={isScoreShown}
                    data={data}
                    isFormSubmitted={isFormSubmitted}
                />

            </div>


        </div>
    );
}