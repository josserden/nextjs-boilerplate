import { MESSAGES } from '@/shared/constants/messages';

import type { ZodType } from 'zod';

type ApiSuccess<T> = { ok: true; data: T; status: number };
type ApiError = { ok: false; status: number; error: string; errorData?: unknown };
export type ApiResult<T> = ApiSuccess<T> | ApiError;

function parseBody(data: unknown, status: number, fallback: string): ApiError {
  const error = data != null && typeof data === 'object' && 'message' in data ? String(data.message) : fallback;

  return { ok: false, status, error, errorData: data };
}

function parseSuccess<T>(data: unknown, status: number, schema?: ZodType<T>): ApiResult<T> {
  if (!schema) return { ok: true, data: data as T, status };

  const parsed = schema.safeParse(data);

  return parsed.success
    ? { ok: true, data: parsed.data, status }
    : { ok: false, status, error: MESSAGES.ERROR.INVALID_RESPONSE, errorData: data };
}

export async function apiFetch<T>(
  url: RequestInfo,
  options?: RequestInit & { schema?: ZodType<T> },
): Promise<ApiResult<T>> {
  try {
    const { schema, ...fetchOptions } = options ?? {};
    const response = await fetch(url, fetchOptions);

    const text = await response.text();
    const data: unknown = text ? JSON.parse(text) : undefined;

    if (!response.ok) return parseBody(data, response.status, response.statusText);

    return parseSuccess(data, response.status, schema);
  } catch (error) {
    return { ok: false, status: 0, error: error instanceof Error ? error.message : MESSAGES.ERROR.NETWORK };
  }
}
