module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'no-console': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'no-empty': 1,
    'no-empty-function': 1,
    'no-duplicate-imports': 2,
    eqeqeq: ['error', 'always'],
    // Prettier rule below will override the default ESLint rule.
    'prettier/prettier': 2
  }
};
