import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  //   Derived from   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestionIndex = userAnswers.length;

  function handleAnswerQuiz(selectedAnswer) {
    // check if the answer is correct
    // if correct, add the quiz to the answeredQuiz
    // if wrong, do nothing

    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleAnswerQuiz(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
