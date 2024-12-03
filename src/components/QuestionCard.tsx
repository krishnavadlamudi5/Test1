import { motion } from 'framer-motion';
import { Question } from '@/types/survey';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
  currentSection: number;
}

export function QuestionCard({ question, onAnswer, currentSection }: QuestionCardProps) {
  const Icon = question.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl border-violet-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-violet-100">
            <Icon className="w-6 h-6 text-violet-600" />
          </div>
          <h2 className="text-2xl font-medium text-violet-900">{question.question}</h2>
        </div>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left h-auto p-4 hover:bg-violet-50 hover:text-violet-700 hover:border-violet-300 transition-all duration-300 group"
              onClick={() => onAnswer(option.score)}
            >
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                {option.text}
              </span>
            </Button>
          ))}
        </div>
        <div className="mt-6 text-sm text-violet-600">
          Section {currentSection}: {question.section === 1 ? 'Information' : question.section === 2 ? 'Lifestyle Assessment' : 'Health Assessment'}
        </div>
      </Card>
    </motion.div>
  );
}