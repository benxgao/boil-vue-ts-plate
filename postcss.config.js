module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('tailwind.js'),
    require('postcss-preset-env')({ stage: 1 }),
    // require('autoprefixer')(), // included in postcss-preset-env
  ],
};
