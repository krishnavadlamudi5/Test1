import { sections } from './survey-data';
import { SCORE_CATEGORIES } from './constants';

export function calculateTotalScore(sectionScores: Record<number, number>): number {
  return Object.values(sectionScores).reduce((a, b) => a + b, 0);
}

export function determineCategory(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100;
  
  // Making excellent much harder to achieve
  if (percentage >= 90) return SCORE_CATEGORIES.EXCELLENT;
  if (percentage >= 65) return SCORE_CATEGORIES.MODERATE;
  return SCORE_CATEGORIES.POOR;
}

export function getCategoryEmoji(category: string): string {
  switch (category) {
    case SCORE_CATEGORIES.EXCELLENT:
      return '🌟';
    case SCORE_CATEGORIES.MODERATE:
      return '🌱';
    case SCORE_CATEGORIES.POOR:
      return '⚠️';
    default:
      return '📊';
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case SCORE_CATEGORIES.EXCELLENT:
      return 'bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent';
    case SCORE_CATEGORIES.MODERATE:
      return 'bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent';
    case SCORE_CATEGORIES.POOR:
      return 'bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent';
    default:
      return 'text-violet-700';
  }
}