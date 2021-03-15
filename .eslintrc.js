module.exports = {
  'env': { 'es6': true,
    'amd': true,
    'node': true,
    'browser': true },

  'parser': '@typescript-eslint/parser',
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'globals': {
    'window': true,
    'module': true,
  },
  'plugins': ['prefer-arrow'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 9,
    'ecmaFeatures': { 'jsx': true },
  },
  'overrides': [{ 'files': ['*.tsx', '*.ts', '*.js'] }],
  'rules': {

    'eol-last': 'error',
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    'no-var': 2,
    'semi': 2,
    'no-extra-semi': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    'comma-style': [2, 'last'],
    'quotes': [1, 'single'],
    'no-console': [2, { allow: ['info', 'warn'] }],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false
      }
    ],
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error'
  }
};
