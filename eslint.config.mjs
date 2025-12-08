import eslintConfigPrettier from 'eslint-config-prettier';
import nextTs from 'eslint-config-next/typescript';
import nextVitals from 'eslint-config-next/core-web-vitals';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginQuery from '@tanstack/eslint-plugin-query';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tseslint.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    plugins: {
      perfectionist,
      react,
      'react-hooks': reactHooks,
    },

    rules: {
      // React & React Hooks
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-target-blank': 'error',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
        },
      ],

      // JavaScript
      'no-unused-vars': 'off', // disabled in favor of @typescript-eslint/no-unused-vars
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // Next.js specific
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',

      // Import sorting (Perfectionist)
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          newlinesBetween: 'always',
          groups: ['external', 'internal', 'parent', 'sibling', 'index', 'object', 'unknown', 'type'],
          internalPattern: ['^@/'],
        },
      ],
    },
  },

  globalIgnores([
    '*.config.mjs',
    '*.config.ts',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.old/**',
    'public/**',
  ]),
]);

export default eslintConfig;
