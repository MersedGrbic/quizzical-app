import React from "react";

export default function Quizz(){

    const [quizz,setQuizz] = React.useState([])
    
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
    
    React.useEffect(()=>{
        const fetchData = async()=>{
        const res = await fetch ('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple   ')
        const data = await res.json()
        setQuizz(data.results)
        }
        fetchData()
        
    },[])
    
    const quizzElements = quizz.map(elem=>{
        
        const questions = [elem.correct_answer,elem.incorrect_answers[0],elem.incorrect_answers[1],elem.incorrect_answers[2]]
        shuffleArray(questions)
        console.log(elem.correct_answer)
        return (
            <>
            <div className="wrapper">
                <div className="question">{decodeHTML(elem.question)}</div>
                  <div className="questions-list">
                    <p>{decodeHTML(questions[0])}</p>
                    <p>{decodeHTML(questions[1])}</p>
                    <p>{decodeHTML(questions[2])}</p>
                    <p>{decodeHTML(questions[3])}</p>
                  </div>
            </div>
            <div className="line"></div>
            </>
        )
    })
    
    
    
    return (
        <div className="questions">
            {quizzElements}
            {quizz.length>0 && <button className="start-btn">Check Answers</button>}
        </div>
    )
}