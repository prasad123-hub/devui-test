// For more you can visit https://dev-yakuza.posstree.com/en/react/nextjs/prettier/
// prettier.config.js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  plugins: [require('prettier-plugin-tailwindcss')], // <--- Add this line for tailwindcss class sorting
}
