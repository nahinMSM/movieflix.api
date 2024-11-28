import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
  rules: {
    ...tsEslintPlugin.configs.recommended.rules, // Regras recomendadas para TypeScript
    "quotes": ["error", "single"], // Forçar o uso de aspas duplas
    "semi": ["error", "always"],   // Forçar o uso de ponto e vírgula
  },
}
];