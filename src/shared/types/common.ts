import type { ReactNode } from 'react';

export interface LayoutProps {
  readonly children: ReactNode;
}

export interface ApiResponse<T = void> {
  data?: T;
  message?: string;
}
