import { API_ENDPOINTS, ERROR_MESSAGES } from './constants';
import type { UserData } from '@/types/survey';
import type { SurveyResult } from '@/types/results';

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || ERROR_MESSAGES.SAVE_FAILED);
    }
    return response.json();
  }

  async saveUserData(data: UserData & SurveyResult) {
    try {
      const response = await fetch(`${this.baseUrl}${API_ENDPOINTS.USERS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`${ERROR_MESSAGES.SAVE_FAILED}: ${error.message}`);
      }
      throw new Error(ERROR_MESSAGES.UNEXPECTED_ERROR);
    }
  }
}

export const apiClient = new ApiClient();