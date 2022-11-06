import React from "react";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import { nanoid } from "nanoid";
export default function Quizz(props){
const [data,setData] = useState('')
const [startAgain,setStartAgain] = useState(false)
const [check, setCheck] = useState(false)
const [chekAnswers, setCheckAnswers] = useState('')
const [message, setMessage] = useState('')
const url = `https://the-trivia-api.com/api/questions?${props.category}limit=${props.numOfQuestions}`
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


React.useEffect(()=>{
  fetch(url)
   .then(res=>res.json())
   .then(data=>{
    const shuffledData= data.map(data=>{
      const options = [data.correctAnswer,data.incorrectAnswers[0],data.incorrectAnswers[1],data.incorrectAnswers[2]]
      const shuffledOptions = shuffle(options)
      return {
        question: data.question,
        correctAnswer: data.correctAnswer,
        id: data.id,
        shuffledOptions,
        userAnswer: ''
      }
    })
    setData(shuffledData)
    points = data.length
   })
  },[startAgain])
  function handleAnswer(id){
    setData(prevState=>{
      const newState = prevState.map(element=>{
        if(element.id == id){
          return {
            ...element,
            userAnswer: event.target.innerText
          }
        }else{
          return {
            ...element
          }
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
       <QuestionCard handleAnswer={handleAnswer}on={check} correct={el.correctAnswer}question={el.question} answers={el.shuffledOptions} id={el.id} userAnswer={el.userAnswer}/>
       <div key={nanoid} className="line"></div>
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
  
  function handleCheck(){
    let checking = 0;
    
    data.map(el=>{
      if(el.userAnswer != ''){
        checking += 1
      }
    })

    if(checking === data.length){
    setCheck(prevState=> !prevState)
    let result = 0
    data.map(el=>{
      if(el.correctAnswer === el.userAnswer){
        result +=1
      }
      
    })
    setMessage(`You scored ${result}/${data.length}`)
    }else{
      setMessage('Please answer all the questions')
    }
    
  }
  function handleStart(){
    setStartAgain(prevState=>!prevState)
    setCheck(prevState=>!prevState)
    props.handleClick()
    

  }
  return (
    <div className="wrapper">
    {displayData()}
    <p className="middle result">{message}</p>
    {check ? <button className="start-btn middle" onClick={handleStart}>New Game</button> : <button className="start-btn middle" onClick={handleCheck}>Check Answers</button>}
    </div>
  )
}