import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { questions, sections } from '@/lib/survey-data';
import { SurveyProgress } from '@/components/SurveyProgress';
import { SurveyHeader } from '@/components/SurveyHeader';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultsCard } from '@/components/ResultsCard';
import { RegistrationForm } from '@/components/RegistrationForm';
import { apiClient } from '@/lib/api-client';
import { calculateTotalScore, determineCategory } from '@/lib/score-calculator';
import { getRecommendations } from '@/lib/recommendations';
import type { UserData } from '@/types/survey';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [scores, setScores] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
  });
  const [category, setCategory] = useState<string>('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const progress = currentQuestion === -1 ? 0 : 
    currentQuestion === questions.length ? 100 : 
    ((currentQuestion + 1) / questions.length) * 100;

  const handleRegistration = async (data: UserData) => {
    setUserData(data);
    setCurrentQuestion(0);
  };

  const handleAnswer = async (score: number) => {
    const question = questions[currentQuestion];
    const newScores = {
      ...scores,
      [question.section]: scores[question.section] + score,
    };
    setScores(newScores);

    if (currentQuestion + 1 === questions.length && userData) {
      const totalScore = calculateTotalScore(newScores);
      const maxScore = sections.reduce((acc, section) => acc + section.maxPoints, 0);
      const newCategory = determineCategory(totalScore, maxScore);
      const newRecommendations = getRecommendations(newCategory, newScores);

      setCategory(newCategory);
      setRecommendations(newRecommendations);

      try {
        await apiClient.saveUserData({
          ...userData,
          scores: {
            section1: newScores[1],
            section2: newScores[2],
            section3: newScores[3],
            total: totalScore,
          },
          category: newCategory,
          recommendations: newRecommendations,
        });
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-violet-100">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <SurveyHeader />
        <SurveyProgress 
          progress={progress} 
          className="mb-8" 
        />
        
        <AnimatePresence mode="wait">
          {currentQuestion === -1 && !userData && (
            <RegistrationForm onSubmit={handleRegistration} />
          )}

          {currentQuestion >= 0 && currentQuestion < questions.length && (
            <QuestionCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              currentSection={questions[currentQuestion].section}
            />
          )}

          {currentQuestion === questions.length && (
            <ResultsCard 
              scores={scores}
              category={category}
              recommendations={recommendations}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}