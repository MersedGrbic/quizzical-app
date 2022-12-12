import React from "react";
import { useState } from "react";

export default function Intro(props) {
  const options = [
    { value: "", text: "Random" },
    { value: "categories=arts_and_literature&", text: "Arts and literature" },
    { value: "categories=film_and_tv&", text: "Film and tv" },
    { value: "categories=food_and_drink&", text: "Food and drink" },
    { value: "categories=general_knowledge&", text: "General knowledge" },
    { value: "categories=geography&", text: "Geography" },
    { value: "categories=history&", text: "History" },
    { value: "categories=music&", text: "Music" },
    { value: "categories=science&", text: "Science" },
    { value: "categories=society_and_culture&", text: "Society and culture" },
    { value: "categories=sport_and_leisure&", text: "Sport and leisure" },
  ];
  const numberOfQuestions = [];
  for (let i = 5; i <= 20; i++) {
    numberOfQuestions.push({ value: i, text: i });
  }

  return (
    <div className="intro">
      <h1>
        <span>Q</span>uizzical
      </h1>
      <div className="introduction">
        <p>Simple Quizz Made With </p>
        <p>
          <i className="fa-brands fa-react"></i>
        </p>
      </div>

      <label className="label" htmlFor="category">
        Category
      </label>
      <div className="select">
        <select id="category" onChange={props.handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <div className="select_arrow"></div>
      </div>
      <label className="label" htmlFor="numberOfQuestions">
        Number of Questions
      </label>
      <div className="select">
        <select id="numberOfQuestions" onChange={props.handleNumberOfQuestions}>
          {numberOfQuestions.map((num) => (
            <option key={num.value} value={num.value}>
              {num.text}
            </option>
          ))}
        </select>
        <div className="select_arrow"></div>
      </div>

      <button onClick={props.handleClick} className="start-btn">
        Start quiz
      </button>
    </div>
  );
}
