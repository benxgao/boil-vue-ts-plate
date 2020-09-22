import prettierRules from './.prettierrc.json';

module.exports = {
  env: { jest: true, browser: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier-vue/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  settings: {
    'import/extensions': ['.ts'],
    'prettier-vue': {
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'ts' },
          comments: false,
        },
      },

      usePrettierrc: false,
      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false,
      },
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierRules],
    'prettier-vue/prettier': ['error', prettierRules],
  },
};
