import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  //   Derived from   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestionIndex = userAnswers.length;

  const handleAnswerQuiz = useCallback(
    function handleAnswerQuiz(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleAnswerQuiz(null),
    [handleAnswerQuiz]
  );

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="summary pic" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleAnswerQuiz}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
