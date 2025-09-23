import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

interface QuizItem {
  question: string;
  options: string[];
  answer: string;
}

const GamifiedSection = () => {
  // ✅ Static data inside component
  const quizData: { title: string; items: QuizItem[] } = {
    title: 'Test Your Knowledge',
    items: [
      {
        question: 'What is 2 + 2?',
        options: ['2', '3', '4', '5'],
        answer: '4',
      },
      {
        question: 'React is developed by?',
        options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
        answer: 'Facebook',
      },
      {
        question: 'Which language runs in the browser?',
        options: ['Python', 'JavaScript', 'C++', 'Java'],
        answer: 'JavaScript',
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData.items[currentIndex];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentIndex < quizData.items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      alert(`Quiz completed! Your score: ${score}/${quizData.items.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <SectionWrapper className="bg-gray-900 py-20">
      <SectionTitle>{quizData.title}</SectionTitle>

      <div className="max-w-2xl mx-auto p-6 bg-black rounded-lg border border-white/10">
        <h3 className="text-xl font-bold mb-4 text-white">{currentQuestion.question}</h3>

        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selectedOption;

            return (
              <motion.button
                key={index}
                className={`p-4 rounded-lg border text-white font-semibold transition-colors
                  ${isSelected ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-800 hover:bg-orange-500'}
                `}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption}
                whileHover={{ scale: 1.05 }}
              >
                {option}
              </motion.button>
            );
          })}
        </div>

        {selectedOption && (
          <motion.div
            className="mt-6 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              className="px-6 py-2 bg-orange-500 rounded-lg font-bold text-black hover:bg-orange-600"
              onClick={handleNext}
            >
              Next
            </button>
          </motion.div>
        )}

        <p className="mt-4 text-gray-400 text-sm">Score: {score}</p>
      </div>
    </SectionWrapper>
  );
};

export default GamifiedSection;
