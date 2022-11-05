module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "prettier", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals", "react-hooks/rule-of-hooks", "react-hooks/exhaustive-deps", "plugin:storybook/recommended"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "eslint-plugin-react", "eslint-plugin-next", "eslint-plugin-react-hooks"],
  "rules": {}
};