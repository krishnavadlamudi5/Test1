export interface SurveyResult {
  scores: {
    section1: number;
    section2: number;
    section3: number;
    total: number;
  };
  category: string;
  recommendations: string[];
}