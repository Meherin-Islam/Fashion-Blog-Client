import { useState } from 'react';

const FashionQuiz = () => {
  const questions = [
    {
      question: "Which type of outfit do you feel most confident in?",
      options: ["Casual chic", "Formal wear", "Vintage Clothing", "Ethnic Fashion"],
    },
    {
      question: "Pick a color palette that resonates with you.",
      options: ["Soft pastels", "Bold and bright", "Neutrals", "Monochrome"],
    },
    {
      question: "What’s your go-to outfit for a brunch with friends?",
      options: ["Floral dress", "Jeans and a tee", "Tailored trousers", "Long Gown"],
    },
    {
      question: "How do you accessorize your look?",
      options: ["Minimal jewelry", "Handmade jewelry", "No accessories", "Antique jewelry"],
    },
    {
      question: "How would your friends describe your personality?",
      options: ["Outgoing and bold", "Calm and collected", "Quirky and fun", "Professional and focused"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleOptionClick = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    const styleCounts = {};
    answers.forEach((answer) => {
      styleCounts[answer] = (styleCounts[answer] || 0) + 1;
    });

    const mostFrequentStyle = Object.keys(styleCounts).reduce((a, b) =>
      styleCounts[a] > styleCounts[b] ? a : b
    );

    setResult(mostFrequentStyle);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col items-center py-5 px-5 mb-10 ">
      <h1 className="text-4xl pt-3 font-bold text-indigo-900 mb-8">Fashion Quiz</h1>

      {result ? (
        <div className="text-center my-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            You’re a {result} Queen!
          </h2>
          <p className="text-xl text-indigo-500 font-bold mb-6">
            Own your style with our curated collection just for you.
          </p>
          <button
            className="bg-indigo-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-indigo-700"
            onClick={restartQuiz}
          >
            Do Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white rounded-lg p-8 border-2 border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block w-full text-left bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold py-2 px-4 rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionQuiz;
