import React, { useEffect } from "react";
import { useState } from "react";
import Answers from './Answers'
import { nanoid } from "nanoid";
export default function QuestionCard(props){
    const [on,setOn] = useState(false)
    const [data,setData] = useState('')
    function handleClick(){
        setOn(prevState=>!prevState)
        console.log('changed')
    }
    React.useEffect(()=>{
        if(props.data.length>0){
           setData(props.data.map(data=>{
             const answers = data.shuffledOptions.map(option=>{
                return {
                    answerId : nanoid(),
                    option : option,
                    clicked : false,
                    correct : data.correctAnswer == option ? true : false
                }
                
                
            
            })
            return {
                question : data.question,
                answerOption : answers
            }     

           })
                
    )}
    },[props.data])
    
   
    function handleUserAnswer(id){
       
      setData(prevState=>{
        
        const newState = prevState.map(el=>{
            const answers = el.answerOption.map(ans=>{
                return {
                    answerId: ans.answerId,
                    option: ans.option,
                    clicked: ans.answerId==id ? true : ans.clicked,
                    correct: ans.correct
                }
            })
            return {
                question: el.question,
                answerOption : answers

            }
            
        })
        
        return newState    
        
      })
    }

    function displayData(){
        if(data.length>0){
           const dataElements = data.map(el=>{
            return (
                <>
                <h1>{el.question}</h1>
                <Answers answers = {el.answerOption} handleClick = {handleUserAnswer} on={on}/>
                </>
            )
           })
            return dataElements
           
        }else{
            return (
                <div className="spinner-wrap">
                  <div className="spinner">
                   <div className="loader l1"></div>
                   <div className="loader l2"></div>
                  </div>
                </div>
            )
        }
    }
   
    return (
            <div key={nanoid()} className="wrapper">
                {displayData()}
                <button className="start-btn middle" onClick={handleClick}>Check Answers</button>
            </div>
    )
        
             
           
}