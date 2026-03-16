import type { ApiResponse } from '@/shared/types/common';

export function createResponse<T>(data?: T, message?: string): ApiResponse<T> {
  return {
    ...(data !== undefined && { data }),
    ...(message !== undefined && { message }),
  };
}
