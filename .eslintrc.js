module.exports = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix",
    "tailwindcss",
    "typescript-sort-keys",
    "unused-imports",
  ],
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          ["^react"],
          ["^next"],
          ["^@?\\w"],
          ["^(@/components)(/.*|$)"],
          ["^(@/configuration)(/.*|$)"],
          ["^(@/data)(/.*|$)"],
          ["^(@/hooks)(/.*|$)"],
          ["^(@/libraries)(/.*|$)"],
          ["^(@/pages)(/.*|$)"],
          ["^(@/providers)(/.*|$)"],
          ["^(@/routers)(/.*|$)"],
          ["^(@/styles)(/.*|$)"],
          ["^(@/types)(/.*|$)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      {
        caseSensitive: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": [
      "warn",
      "asc",
      { caseSensitive: false, natural: true },
    ],
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
