import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function QuestionCard(props){
    const[userAnswer,setUserAnswer] = useState('')
    console.log(props.correct)
    function handleAnswer(event){
        setUserAnswer(event.target.innerText)
    }
    
    const answerEl= props.answers.map(ans=>{
        if(!props.on){
        return <p onClick={handleAnswer} style={{backgroundColor: ans === userAnswer ? "#D6DBF5" : "#F5F7FB"}} className="answer">{ans}</p>
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
        <h1>{props.question}</h1>
        <div className="answer-list">
        {answerEl}
        </div>
        </div>
        
    )
}
    
 