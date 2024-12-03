import { cn } from '@/lib/utils';

interface SurveyProgressProps {
  progress: number;
  className?: string;
}

export function SurveyProgress({ progress, className }: SurveyProgressProps) {
  return (
    <div className={cn('w-full bg-violet-100 rounded-full h-3 overflow-hidden', className)}>
      <div
        className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-1000 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}