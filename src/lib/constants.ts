export const API_ENDPOINTS = {
  USERS: '/api/users',
} as const;

export const ERROR_MESSAGES = {
  SAVE_FAILED: 'Failed to save data',
  NETWORK_ERROR: 'Network error occurred',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
} as const;

export const SCORE_CATEGORIES = {
  EXCELLENT: 'Excellent',
  MODERATE: 'Moderate',
  POOR: 'Poor',
} as const;