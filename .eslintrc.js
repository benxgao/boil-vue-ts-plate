import prettierRules from './.prettierrc.json';

module.exports = {
  env: { jest: true, browser: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier-vue/recommended',
    // 'prettier/vue', // Do not add `'prettier/vue'` if you don't want to use prettier for `<template>` blocks
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, remember not to `extends: ['prettier/vue']`, as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
         *
         * @default true
         */
        template: true,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },

          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },

          // Treat the `<module>` block as a `.ts` file
          module: { lang: 'ts' },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: false,

      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: '.testignore',

        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierRules],
    'prettier-vue/prettier': ['error', prettierRules],
    // 'vue/no-multiple-template-root': 'off',
  },
};
