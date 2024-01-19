module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["@stylistic"],
  extends: ["eslint:recommended", "plugin:svelte/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@stylistic/indent": ["error", 2],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
