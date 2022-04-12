export default {
  extends: ['eslint-config-airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  plugins: ['eslint-comments', 'jest', 'unicorn'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'prefer-const': 2,
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'import/no-unresolved': 0,
    'import/order': 0,
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/named': 0,
    'import/no-named-as-default-member': 0,
    'import/no-duplicates': 0,
    'import/no-self-import': 0,
    'import/extensions': 0,
    'import/no-useless-path-segments': 0,
    'sort-imports': 0,
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'unicorn/prevent-abbreviations': 'off',
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
    requireConfigFile: false,
    project: './tsconfig.json',
  },
};
