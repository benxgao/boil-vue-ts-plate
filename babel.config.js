module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    [
      '@vue/app',
      {
        polyfills: ['es.promise', 'es.symbol'],
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
