import { SCORE_CATEGORIES } from './constants';

export function calculateTotalScore(sectionScores: Record<number, number>): number {
  return Object.values(sectionScores).reduce((a, b) => a + b, 0);
}

export function determineCategory(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100;
  if (percentage >= 90) return SCORE_CATEGORIES.EXCELLENT;
  if (percentage >= 65) return SCORE_CATEGORIES.MODERATE;
  return SCORE_CATEGORIES.POOR;
}
