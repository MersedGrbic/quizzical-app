import React from "react";
import { useState } from "react";
import QuestionCard from './QuestionCard'
export default function Quizz(){
const [data,setData] = useState('')
const [startAgain,setStartAgain] = useState(false)
const url = 'https://the-trivia-api.com/api/questions?limit=5'

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
        ...data,
        shuffledOptions
      }
    })
    setData(shuffledData)
   })
  },[startAgain])

  
  
  return (
    <QuestionCard data={data} />
  )
}