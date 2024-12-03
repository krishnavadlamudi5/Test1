import { motion } from 'framer-motion';
import { Activity, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { sections } from '@/lib/survey-data';
import { getCategoryEmoji, getCategoryColor } from '@/lib/score-calculator';

interface ResultsCardProps {
  scores: { [key: number]: number };
  category: string;
  recommendations: string[];
}

export function ResultsCard({ scores, category, recommendations }: ResultsCardProps) {
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = sections.reduce((acc, section) => acc + section.maxPoints, 0);
  const percentage = Math.round((totalScore / maxScore) * 100);
  const emoji = getCategoryEmoji(category);
  const categoryColor = getCategoryColor(category);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="p-8 bg-white/90 backdrop-blur-sm text-center border-violet-100">
        <div className="mb-6">
          <span className="text-4xl">{emoji}</span>
        </div>
        <h2 className="text-3xl font-bold text-violet-900 mb-4">Your Zenzzo Life Score</h2>
        <div className={`text-6xl font-bold mb-6 ${categoryColor}`}>
          {percentage}%
        </div>
        <div className={`text-2xl font-semibold mb-4 ${categoryColor}`}>
          {category} {emoji}
        </div>
      </Card>

      <Card className="p-8 bg-white/90 backdrop-blur-sm border-violet-100">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-violet-600" />
          <h3 className="text-xl font-semibold text-violet-900">Personalized Recommendations</h3>
        </div>
        <ul className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start gap-3">
              <Activity className="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" />
              <span className="text-violet-800">{recommendation}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}