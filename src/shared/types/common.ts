import type { ReactNode } from 'react';

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export interface ApiResponse<T = void> {
  data?: T;
  message?: string;
}
