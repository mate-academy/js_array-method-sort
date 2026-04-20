module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-param-reassign': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-console': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
  },
};
