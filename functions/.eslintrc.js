module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
    'jsx': true
    },
    'ecmaVersion': 12
  },
};
