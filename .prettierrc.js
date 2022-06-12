module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tailwindConfig: "./tailwind.config.js",
  trailingComma: "es5",
  useTabs: false,
};
