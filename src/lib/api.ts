import type { UserData } from '@/types/survey';

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

export async function saveUserData(data: UserData & SurveyResult) {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to save user data');
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to save data: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
}