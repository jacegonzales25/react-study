import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

//   Derived from   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestionIndex = userAnswers.length

  function handleAnswerQuiz() {
    // check if the answer is correct
    // if correct, add the quiz to the answeredQuiz
    // if wrong, do nothing
  }

  return <p>Currently active Question</p>;
}
