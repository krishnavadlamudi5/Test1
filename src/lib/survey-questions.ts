export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

export const surveyQuestions: Question[] = [
  {
    id: 'q1',
    text: 'How are you feeling today?',
    options: [
      { id: 'q1a1', text: 'Very calm and centered', value: 5 },
      { id: 'q1a2', text: 'Somewhat relaxed', value: 4 },
      { id: 'q1a3', text: 'Neutral', value: 3 },
      { id: 'q1a4', text: 'A little tense', value: 2 },
      { id: 'q1a5', text: 'Very stressed', value: 1 },
    ],
  },
  {
    id: 'q2',
    text: 'How well did you sleep last night?',
    options: [
      { id: 'q2a1', text: 'Extremely well', value: 5 },
      { id: 'q2a2', text: 'Pretty good', value: 4 },
      { id: 'q2a3', text: 'Average', value: 3 },
      { id: 'q2a4', text: 'Not so well', value: 2 },
      { id: 'q2a5', text: 'Poorly', value: 1 },
    ],
  },
  {
    id: 'q3',
    text: 'How would you rate your energy levels?',
    options: [
      { id: 'q3a1', text: 'Very energetic', value: 5 },
      { id: 'q3a2', text: 'Moderately energetic', value: 4 },
      { id: 'q3a3', text: 'Neutral', value: 3 },
      { id: 'q3a4', text: 'Somewhat tired', value: 2 },
      { id: 'q3a5', text: 'Exhausted', value: 1 },
    ],
  },
];