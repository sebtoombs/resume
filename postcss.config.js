// in postcss.config.js
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    require('autoprefixer'),
    require('tailwindcss')
  ],
})