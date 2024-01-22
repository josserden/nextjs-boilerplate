module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'jsx-a11y',
    'unicorn',
    'react',
    'sonarjs',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^React$',
      },
    ],
    'no-undef': 'off',
    'no-console': [
      'error',
      {
        allow: ['error', 'info', 'warn'],
      },
    ],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'off',
    'no-duplicate-imports': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true, allowExportNames: ['metadata'] },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          db: false,
          arg: false,
          args: false,
          env: false,
          fn: false,
          func: {
            fn: true,
            function: false,
          },
          prop: false,
          props: false,
          ref: false,
          refs: false,
        },
        ignore: ['semVer', 'SemVer'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
