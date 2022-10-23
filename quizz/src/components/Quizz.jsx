import React from "react";
import Answer from "./Answer"

export default function Quizz(props){
 
     function decodeHTML(html){
    let txt= document.createElement('textarea');
    txt.innerHTML=html;
    return txt.value
}
function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
   }
}
 const answers = [decodeHTML(props.data.correct_answer), decodeHTML(props.data.incorrect_answers[0]),decodeHTML(props.data.incorrect_answers[1]),decodeHTML(props.data.incorrect_answers[2])]
 shuffleArray(answers)
 const answersElements= answers.map(ans=>{
    return <Answer 
    answer={ans}
    correctAnswer={(props.data.correct_answer)}
    on = {true}
    />
 })
 return (
    <div className="wrapper">
        <h2>{decodeHTML(props.data.question)}</h2>
        <div className="answer-list">
        {answersElements}
        </div>
    </div>
  )
}