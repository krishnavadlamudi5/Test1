import { sections } from './survey-data';
import { SCORE_CATEGORIES } from './constants';

interface HealthCondition {
  condition: string;
  recommendations: string[];
}

const healthConditions: HealthCondition[] = [
  {
    condition: "Cardiovascular Risk",
    recommendations: [
      "Schedule a cardiac health assessment",
      "Monitor blood pressure regularly",
      "Consider a heart-healthy Mediterranean diet",
      "Engage in regular cardiovascular exercise"
    ]
  },
  {
    condition: "Metabolic Issues",
    recommendations: [
      "Get comprehensive blood sugar testing",
      "Consult an endocrinologist",
      "Monitor your glycemic index",
      "Consider intermittent fasting under medical supervision"
    ]
  },
  {
    condition: "Stress-Related Health Issues",
    recommendations: [
      "Practice daily stress management techniques",
      "Consider cognitive behavioral therapy",
      "Try meditation or mindfulness practices",
      "Get regular sleep schedule assessment"
    ]
  }
];

const recommendationsByCategory: Record<string, string[]> = {
  [SCORE_CATEGORIES.EXCELLENT]: [
    '🎯 Maintain your exceptional wellness routine',
    '🌟 Consider becoming a wellness mentor to inspire others',
    '📚 Stay updated with advanced health optimization techniques',
    '🧘‍♂️ Explore advanced mindfulness and meditation practices',
    '🔬 Consider regular preventive health screenings'
  ],
  [SCORE_CATEGORIES.MODERATE]: [
    '⚖️ Focus on balancing your daily health routine',
    '🏃‍♂️ Gradually increase physical activity intensity',
    '🥗 Improve nutrition with whole foods',
    '😴 Optimize your sleep schedule',
    '🧠 Consider stress management techniques'
  ],
  [SCORE_CATEGORIES.POOR]: [
    '🏥 Schedule a comprehensive health assessment immediately',
    '👨‍⚕️ Consult with healthcare professionals',
    '📝 Start a health journal to track symptoms',
    '🥬 Begin with basic nutrition improvements',
    '🚶‍♂️ Start with gentle daily walking'
  ]
};

export function getRecommendations(category: string, scores: Record<number, number>): string[] {
  let recommendations = [...recommendationsByCategory[category]];

  // Add condition-specific recommendations based on scores
  if (scores[3] < sections[2].maxPoints * 0.6) { // Health Assessment section
    const randomCondition = healthConditions[Math.floor(Math.random() * healthConditions.length)];
    recommendations.push(...randomCondition.recommendations.slice(0, 2)); // Only add 2 condition-specific recommendations
  }

  // Limit total recommendations to prevent overwhelming the user
  return recommendations.slice(0, 6);
}