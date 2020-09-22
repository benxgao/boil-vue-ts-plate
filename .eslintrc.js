module.exports = {
  env: { jest: true, browser: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    parser: 'babel-eslint', // the typescript-parser for eslint, instead of tslint
    sourceType: 'module', // allow the use of imports statements
    ecmaVersion: 2018, // allow the parsing of modern ecmascript
  },
  settings: {
    'import/extensions': ['.ts'],
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        // plugins: ['prettier-plugin-package']
      },
    ],
  },
};
