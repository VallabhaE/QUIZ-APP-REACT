import { useState } from "react"
import QUESTIONS from "../questions"
import QUIZCOMPLETEIMAGE from "../assets/quiz-complete.png"
export default function Quiz(){
    const [ansByUser,setAnsByUser] = useState([]);
    const [score,setScore] = useState(0);
    const activeQuestionIdx = ansByUser.length;
    const quizIsComplete = activeQuestionIdx === QUESTIONS.length;
    if(quizIsComplete){
        return (
            <div id="summary">
            <img src={QUIZCOMPLETEIMAGE} alt="" />
            <h2>
                QUIZ IS COMPLETE
                SCORE : {score}
            </h2>
            </div>
        );
    }
    const shuffledData = [...QUESTIONS[activeQuestionIdx].answers]

    function handleClick(ans){
        setAnsByUser((prev)=>{
            return [...prev,ans]
        })
        if(ans===QUESTIONS[activeQuestionIdx].answers[0]){
            setScore((score)=>score+1)
        }

        console.log(score)
    }
    shuffledData.sort(() => Math.random() - 0.5);
    

    return (
        <div id="quiz">
            <div id="question">
            <h2>{QUESTIONS[activeQuestionIdx].text}</h2>
            <ul id="answers">
                {shuffledData.map((ans)=>{
                    return <li key={ans} className="answer" ><button  onClick={()=>handleClick(ans)}>{ans}</button></li>
                })}
            </ul>
        </div>

        </div>

    )
}