import nextPlugin from "next/eslint-plugin-next";

export default [
  // Apply Next.js core-web-vitals config
  ...nextPlugin.configs['core-web-vitals'],
  // Add your custom rules/overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      next: nextPlugin,
    },
    rules: {
      // Add additional rules here
    },
  },
];