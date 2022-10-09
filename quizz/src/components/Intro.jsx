import React from "react";

export default function Intro(props){
    return (
        <div className="intro">
            <h1><span>Q</span>uizzical</h1>
            <div className="introduction">
            <p>Simple Quizz Made With </p>
            <p><i className="fa-brands fa-react"></i></p>
            </div>
            <button onClick={props.handleClick} className="start-btn">Start quiz</button>
        </div>
    )
}