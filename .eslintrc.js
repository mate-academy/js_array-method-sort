module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
  },
  rules: {
  indent: ['error', 2],
  'prettier/prettier': 'off',
  'no-mixed-spaces-and-tabs': 'error',
  'no-proto': 0,
},


  plugins: ['jest'],
};
