import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function QuestionCard(props){
    const[userAnswer,setUserAnswer] = useState('')
    function handleAnswer(event){
        setUserAnswer(event.target.innerText)
    }
    console.log(userAnswer)
    const answerEl= props.answers.map(ans=>{
        if(!props.on){
        return <p key={nanoid()} onClick={handleAnswer} style={{backgroundColor: ans === userAnswer ? "#D6DBF5" : "#F5F7FB"}} className="answer">{ans}</p>
        }else{
            if(ans === props.correct){
                return <p className="answer" style={{backgroundColor: "#94D7A2"}}>{ans}</p>
            }else{
                return <p className="answer" style={{backgroundColor: ans===userAnswer ? "#F8BCBC" : "#F5F7FB"}}>{ans}</p>
            }
        }
    })
    
    return (
        <div className="question-wrapper">
        <h3>{props.question}</h3>
        <div className="answer-list">
        {answerEl}
        </div>
        </div>
        
    )
}
    
 