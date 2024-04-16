import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classnames = <T extends ClassValue[]>(...classes: T) =>
  twMerge(clsx(...classes));
