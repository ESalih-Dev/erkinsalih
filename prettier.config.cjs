/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  tailwindConfig: './tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
