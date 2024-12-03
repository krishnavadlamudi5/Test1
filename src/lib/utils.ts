import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCategory(totalScore: number, maxScore: number): string {
  const percentage = (totalScore / maxScore) * 100;
  
  if (percentage >= 80) {
    return 'Excellent';
  } else if (percentage >= 60) {
    return 'Moderate';
  } else {
    return 'Poor';
  }
}

export function calculateSectionScore(score: number, maxPoints: number): number {
  return Math.round((score / maxPoints) * 100);
}

export function getRecommendationsByCategory(category: string): string[] {
  switch (category) {
    case 'Excellent':
      return [
        'Maintain your healthy lifestyle and continue your wellness practices',
        'Consider becoming a wellness mentor to others',
        'Stay updated with the latest health and wellness trends',
      ];
    case 'Moderate':
      return [
        'Focus on improving your daily habits and routines',
        'Consider consulting with a wellness professional',
        'Set specific health goals and track your progress',
      ];
    case 'Poor':
      return [
        'Schedule a comprehensive health check-up',
        'Consider working with a health coach or nutritionist',
        'Start with small, achievable wellness goals',
        'Develop a consistent sleep and exercise routine',
      ];
    default:
      return [];
  }
}