import { motion } from 'framer-motion';

export function SurveyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent hover:from-purple-600 hover:to-violet-500 transition-all duration-500 cursor-pointer">
        Zenzzo Life Score
      </h1>
      <p className="mt-4 text-lg text-violet-700 opacity-80">
        Discover your wellness journey through personalized insights
      </p>
    </motion.div>
  );
}