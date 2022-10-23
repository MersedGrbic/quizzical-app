import React, { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
function App() {
  
  const [start,setStart]= React.useState(true)
  const [quizz,setQuizz]= React.useState([])

React.useEffect(()=>{
  const fetchData = async()=>{
  const res = await fetch ('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple   ')
  const data = await res.json()
  setQuizz(data.results)
  }
  fetchData()
},[])

const quizzElements = quizz.map(elem=>{
  
  return <Quizz 
   data={elem}
  />
})
function handleClick(){
    setStart(false)
  }
  
  return (
    <div className="App">
      
      {start ? <Intro handleClick={handleClick}/> : quizzElements }
      
    </div> 
  )
}

export default App
