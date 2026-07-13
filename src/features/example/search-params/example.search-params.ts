import { createLoader, parseAsString, parseAsStringLiteral } from 'nuqs/server';

const sortOptions = ['asc', 'desc'] as const;

export const exampleSearchParamsParsers = {
  q: parseAsString.withDefault(''),
  sort: parseAsStringLiteral(sortOptions).withDefault('asc'),
};

export const loadExampleSearchParams = createLoader(exampleSearchParamsParsers);
