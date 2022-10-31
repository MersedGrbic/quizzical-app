import React from 'react'
import Intro from './components/Intro'
import Quizz from './components/Quizz'
import { nanoid } from 'nanoid'
function App() {
  
  const [start,setStart]= React.useState(true)
  
  



function handleClick(){
    setStart(false)
  }
 
 
  return (
    <div className="App">
      
      {start ? <Intro handleClick={handleClick}/> : <Quizz/> }
      
      
    </div> 
  )
}

export default App
