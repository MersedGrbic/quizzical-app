import React from 'react'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
import { nanoid } from 'nanoid'
function App() {
  
  const [start,setStart]= React.useState(true)
  
  



function handleClick(){
    setStart(prevState=>!prevState)
  }
 
 
  return (
    <div className="App">
      
      {start ? <Intro handleClick={handleClick}/> : <Quizz handleClick={handleClick}/> }
      
      
    </div> 
  )
}

export default App
