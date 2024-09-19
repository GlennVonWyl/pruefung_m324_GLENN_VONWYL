export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "error",
      "prefer-const": "error",
    },
  },
];
