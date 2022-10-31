import React from "react";
import {nanoid} from 'nanoid'
import { useState } from "react";
export default function Answers(props){
console.log(props)
const answerEl = props.answers.map(answer=>{
    if(props.on){
        if(answer.correct){
            return  <p style={{backgroundColor:"#94D7A2"}} className="answer">{answer.option}</p>
        }else if(answer.clicked){
            return  <p style={{backgroundColor:"#F8BCBC"}} className="answer">{answer.option}</p>

        }else{
            return <p style={{backgroundColor:"#F5F7FB"}} className="answer">{answer.option}</p>

        }

    }else{
        return <p onClick={()=>props.handleClick(answer.answerId)} style={{backgroundColor: answer.clicked? "#D6DBF5" : "#F5F7FB"}} className="answer">{answer.option}</p>
    }

    
})

return(
    <div className="answer-list">
        {answerEl}
    </div>
    
)

}