import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { ReactDOM } from 'react'
import { useEffect } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
function App() {
  
  const [start,setStart]= React.useState(true)
  const [quizz,setQuizz]= React.useState([])
  React.useEffect(()=>{
   
const url = 'https://opentdb.com/api.php?amount=5&difficulty=medium'

fetch(url)
  .then(res => res.json())
  .then(data => setQuizz(data.results))
  .catch(error => console.error(error))
    
    },[])
  const quizzElements = quizz.map(elem=>{
    return <Quizz question={elem.question} key={nanoid()}/>
  })
  
  function handleClick(){
    setStart(false)
  }
  
  return (
    <div className="App">
      
      {start && <Intro handleClick={handleClick}/>}
      {quizzElements}
      
      
    </div> 
  )
}

export default App
