import { Question, Section } from '../types/survey';
import { User, Brain, Heart, Dumbbell, Apple, Moon, Cigarette, Droplets } from 'lucide-react';

export const sections: Section[] = [
  {
    id: 1,
    title: "Information",
    maxPoints: 25
  },
  {
    id: 2,
    title: "Lifestyle Assessment",
    maxPoints: 50
  },
  {
    id: 3,
    title: "Health Assessment",
    maxPoints: 25
  }
];

export const questions: Question[] = [
  // Section 1: Information
  {
    id: 1,
    section: 1,
    question: "What is your age group?",
    icon: User,
    options: [
      { text: "18-25", score: 0.5 },
      { text: "26-35", score: 1 },
      { text: "36-45", score: 2 },
      { text: "Above 45", score: 3 }
    ]
  },
  {
    id: 2,
    section: 1,
    question: "What is your gender?",
    icon: User,
    options: [
      { text: "Male", score: 1 },
      { text: "Female", score: 1 },
      { text: "Other", score: 1 }
    ]
  },
  {
    id: 3,
    section: 1,
    question: "What is your occupation?",
    icon: Brain,
    options: [
      { text: "Desk job", score: 2 },
      { text: "Field job", score: 3 },
      { text: "Homemaker", score: 2 },
      { text: "Student", score: 1 },
      { text: "Retired", score: 4 }
    ]
  },
  {
    id: 4,
    section: 1,
    question: "What is your primary goal regarding health?",
    icon: Dumbbell,
    options: [
      { text: "Weight loss", score: 2 },
      { text: "Muscle gain", score: 4 },
      { text: "General wellness", score: 1 },
      { text: "Managing a specific condition", score: 6 }
    ]
  },
  {
    id: 5,
    section: 1,
    question: "Would you be interested in personalized nutrition designed for you?",
    icon: Apple,
    options: [
      { text: "Yes, definitely", score: 5 },
      { text: "Maybe", score: 3 },
      { text: "Not really", score: 0 }
    ]
  },
  {
    id: 6,
    section: 1,
    question: "What is your average monthly expenditure on health and fitness?",
    icon: Brain,
    options: [
      { text: "Less than ₹1,000", score: 1 },
      { text: "₹1,000–₹5,000", score: 3 },
      { text: "₹5,000–₹10,000", score: 4 },
      { text: "More than ₹10,000", score: 5 }
    ]
  },
  // Section 2: Lifestyle Assessment
  {
    id: 7,
    section: 2,
    question: "How often do you exercise in a week?",
    icon: Dumbbell,
    options: [
      { text: "Daily", score: 8 },
      { text: "3-4 times", score: 6 },
      { text: "1-2 times", score: 4 },
      { text: "Rarely", score: 2 }
    ]
  },
  {
    id: 8,
    section: 2,
    question: "How would you describe your dietary habits?",
    icon: Apple,
    options: [
      { text: "Balanced and healthy", score: 8 },
      { text: "Sometimes healthy", score: 5 },
      { text: "Mostly unhealthy", score: 3 },
      { text: "I don't monitor my diet", score: 0 }
    ]
  },
  {
    id: 9,
    section: 2,
    question: "How many meals do you have in a day?",
    icon: Apple,
    options: [
      { text: "3 balanced meals", score: 6 },
      { text: "2 meals and occasional snacks", score: 4 },
      { text: "1 main meal and frequent snacks", score: 2 },
      { text: "Irregular meals", score: 1 }
    ]
  },
  {
    id: 10,
    section: 2,
    question: "How many hours do you sleep on average?",
    icon: Moon,
    options: [
      { text: "7-8 hours", score: 6 },
      { text: "5-6 hours", score: 3 },
      { text: "Less than 5 hours", score: 1 }
    ]
  },
  {
    id: 11,
    section: 2,
    question: "Do you smoke or consume alcohol?",
    icon: Cigarette,
    options: [
      { text: "No", score: 6 },
      { text: "Occasionally", score: 3 },
      { text: "Regularly", score: 1 }
    ]
  },
  {
    id: 12,
    section: 2,
    question: "How often do you consume sugary or processed foods?",
    icon: Apple,
    options: [
      { text: "Rarely", score: 5 },
      { text: "Occasionally", score: 3 },
      { text: "Frequently", score: 1 }
    ]
  },
  {
    id: 13,
    section: 2,
    question: "How often do you feel physically active throughout the day?",
    icon: Dumbbell,
    options: [
      { text: "Almost all the time", score: 6 },
      { text: "Sometimes", score: 3 },
      { text: "Rarely", score: 1 }
    ]
  },
  {
    id: 14,
    section: 2,
    question: "How much water do you drink daily?",
    icon: Droplets,
    options: [
      { text: "More than 2 liters", score: 5 },
      { text: "1-2 liters", score: 3 },
      { text: "Less than 1 liter", score: 1 }
    ]
  },
  // Section 3: Health Assessment
  {
    id: 15,
    section: 3,
    question: "Do you have any existing medical conditions?",
    icon: Heart,
    options: [
      { text: "No", score: 5 },
      { text: "Minor conditions", score: 3 },
      { text: "Chronic conditions", score: 1 }
    ]
  },
  {
    id: 16,
    section: 3,
    question: "How often do you visit a doctor for routine checkups?",
    icon: Heart,
    options: [
      { text: "Annually", score: 5 },
      { text: "Every 2-3 years", score: 3 },
      { text: "Rarely or never", score: 1 }
    ]
  },
  {
    id: 17,
    section: 3,
    question: "Do you monitor your blood sugar, cholesterol, or blood pressure levels?",
    icon: Heart,
    options: [
      { text: "Yes, regularly", score: 5 },
      { text: "Occasionally", score: 3 },
      { text: "No", score: 1 }
    ]
  },
  {
    id: 18,
    section: 3,
    question: "Do you experience stress or anxiety frequently?",
    icon: Brain,
    options: [
      { text: "Rarely", score: 3 },
      { text: "Sometimes", score: 1.5 },
      { text: "Often", score: 1 }
    ]
  },
  {
    id: 19,
    section: 3,
    question: "Have you or your immediate family members been diagnosed with cardiovascular diseases?",
    icon: Heart,
    options: [
      { text: "No", score: 3 },
      { text: "Yes, family member(s)", score: 2 },
      { text: "Yes, me", score: 1 }
    ]
  },
  {
    id: 20,
    section: 3,
    question: "Do you frequently experience fatigue or lack of energy?",
    icon: Brain,
    options: [
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 0.5 }
    ]
  },
  {
    id: 21,
    section: 3,
    question: "How often do you experience digestive issues?",
    icon: Heart,
    options: [
      { text: "Rarely", score: 1 },
      { text: "Occasionally", score: 0.5 },
      { text: "Frequently", score: 0 }
    ]
  },
  {
    id: 22,
    section: 3,
    question: "Do you get your blood tests done regularly?",
    icon: Heart,
    options: [
      { text: "Yes, every 6 months", score: 1 },
      { text: "Once a year", score: 0.5 },
      { text: "Rarely or never", score: 0 }
    ]
  }
];