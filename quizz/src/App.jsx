import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { ReactDOM } from 'react'
import { useEffect } from 'react'
import './App.css'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
function App() {
  
  const [start,setStart]= React.useState(true)
  
  
  function handleClick(){
    setStart(false)
  }
  
  return (
    <div className="App">
      
      {start && <Intro handleClick={handleClick}/>}
      {!start && <Quizz/>}
      
      
    </div> 
  )
}

export default App
