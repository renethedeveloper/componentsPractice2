
import React, { useState } from 'react'
import "./index.css"


const QuizCard = () => {
  const [question, setQuestion] =useState([
    {
      id: 1,
      question: "Who was the first Roman Emperor?",
      options: [
        { optionId: "A", text: "Julius Caesar" },
        { optionId: "B", text: "Augustus" },
        { optionId: "C", text: "Nero" },
        { optionId: "D", text: "Cicero" },
      ],
      correctAnswer: "B",
    },
    {
      id: 2,
      question: "What year is traditionally considered the founding of Rome?",
      options: [
        { optionId: "A", text: "753 BC" },
        { optionId: "B", text: "44 BC" },
        { optionId: "C", text: "27 BC" },
        { optionId: "D", text: "476 AD" },
      ],
      correctAnswer: "A",
    },
    {
      id: 3,
      question: "Which Roman general famously crossed the Rubicon River?",
      options: [
        { optionId: "A", text: "Julius Caesar" },
        { optionId: "B", text: "Mark Antony" },
        { optionId: "C", text: "Cicero" },
        { optionId: "D", text: "Pompey" },
      ],
      correctAnswer: "A",
    },
    {
      id: 4,
      question: "What is the name of the Roman architectural masterpiece that served as a gladiatorial arena?",
      options: [
        { optionId: "A", text: "Pantheon" },
        { optionId: "B", text: "Colosseum" },
        { optionId: "C", text: "Roman Forum" },
        { optionId: "D", text: "Hadrian's Wall" },
      ],
      correctAnswer: "B",
    },
    {
      id: 5,
      question: "Which Roman emperor famously declared himself a god and persecuted Christians?",
      options: [
        { optionId: "A", text: "Nero" },
        { optionId: "B", text: "Trajan" },
        { optionId: "C", text: "Augustus" },
        { optionId: "D", text: "Tiberius" },
      ],
      correctAnswer: "A",
    },
    {
      id: 6,
      question: "What language was primarily spoken in the Roman Empire?",
      options: [
        { optionId: "A", text: "Greek" },
        { optionId: "B", text: "Latin" },
        { optionId: "C", text: "Aramaic" },
        { optionId: "D", text: "Coptic" },
      ],
      correctAnswer: "B",
    },
    {
      id: 7,
      question: "Who wrote the epic poem 'The Aeneid,' which tells the story of the Trojan hero Aeneas?",
      options: [
        { optionId: "A", text: "Virgil" },
        { optionId: "B", text: "Homer" },
        { optionId: "C", text: "Ovid" },
        { optionId: "D", text: "Cicero" },
      ],
      correctAnswer: "A",
    },
    {
      id: 8,
      question: "What event marked the fall of the Western Roman Empire in 476 AD?",
      options: [
        { optionId: "A", text: "The assassination of Julius Caesar" },
        { optionId: "B", text: "The sack of Rome by Visigoths" },
        { optionId: "C", text: "The Battle of Actium" },
        { optionId: "D", text: "The coronation of Charlemagne" },
      ],
      correctAnswer: "B",
    },
  ])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestion = () => {
    if (currentQuestionIndex === question.length - 1) {
      alert('You have completed the quiz');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex === 0) {
      alert('This is the first question');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = question[currentQuestionIndex];

  return (
    <div className="container">
      <button onClick={previousQuestion}>Previous</button>
      <button onClick={nextQuestion}>Next</button>
      <p>{currentQuestion.question}</p>
      {currentQuestion.options.map((option) => (
        <div key={option.optionId}>
          <input
            type="radio"
            name={`question_${currentQuestion.id}`}
            id={`question_${currentQuestion.id}_${option.optionId}`}
          />
          <label htmlFor={`question_${currentQuestion.id}_${option.optionId}`}>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuizCard;