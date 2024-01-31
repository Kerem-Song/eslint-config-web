module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "simple-import-sort", "prettier", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^react"], ["^@?\\w"], ["@/(.*)"], ["^[./]"]],
      },
    ],
    "simple-import-sort/exports": [
      "error",
      {
        groups: [["^react"], ["^@?\\w"], ["@/(.*)"], ["^[./]"]],
      },
    ],
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["*.js", "**.config.ts"],
    },
  ],
};
