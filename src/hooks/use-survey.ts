import { useState } from 'react';
import { apiClient } from '@/lib/api-client';
import { calculateTotalScore } from '@/lib/score-calculator';
import { questions } from '@/lib/survey-data';
import type { UserData } from '@/types/survey';

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

    const totalScore = calculateTotalScore(newScores);
    try {
      await apiClient.saveUserData({
        ...userData,
        scores: newScores,
        total: totalScore,
      });
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save results');
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
