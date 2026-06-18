module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'indent': 'off',
    'no-proto': 0
  },
  plugins: ['jest']
};
