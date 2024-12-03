import { LucideIcon } from 'lucide-react';

export interface Section {
  id: number;
  title: string;
  maxPoints: number;
}

export interface Option {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  section: number;
  question: string;
  icon: LucideIcon;
  options: Option[];
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
}