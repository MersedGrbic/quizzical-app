import React from 'react'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
import { useState } from 'react'
import { nanoid } from 'nanoid'
function App() {
  
  const [start,setStart]= useState(true)
  const [quizzInfo, setQuizzInfo] = useState('')
  const [category, setCategory] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(5) 
const handleChange = event => {
    setCategory(event.target.value);
  };
const handleNumberOfQuestions = event => {
    setNumOfQuestions(event.target.value)
}
function handleClick(){
    setStart(prevState=>!prevState)
  }
 
 
  return (
    <div className="App">
      
      {start ? <Intro handleChange={handleChange} handleNumberOfQuestions={handleNumberOfQuestions} handleClick={handleClick}/> : <Quizz category={category} numOfQuestions={numOfQuestions}  handleClick={handleClick}/> }
      
 
      
    </div> 
  )
}

export default App
