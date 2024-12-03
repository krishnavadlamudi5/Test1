import { useState } from 'react';
import { apiClient } from '@/lib/api-client';
import { calculateTotalScore, calculateMaxScore, determineCategory } from '@/lib/score-calculator';
import { getRecommendations } from '@/lib/recommendations';
import type { UserData } from '@/types/survey';
import type { SurveyResult } from '@/types/results';

export function useSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [scores, setScores] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const handleRegistration = async (data: UserData) => {
    setUserData(data);
    setCurrentQuestion(0);
    setError(null);
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
      const maxScore = calculateMaxScore();
      const category = determineCategory(totalScore, maxScore);
      const recommendations = getRecommendations(category);

      try {
        await apiClient.saveUserData({
          ...userData,
          scores: {
            section1: newScores[1],
            section2: newScores[2],
            section3: newScores[3],
            total: totalScore,
          },
          category,
          recommendations,
        });
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to save results');
      }
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  return {
    currentQuestion,
    userData,
    scores,
    error,
    handleRegistration,
    handleAnswer,
  };
}