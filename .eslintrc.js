module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
