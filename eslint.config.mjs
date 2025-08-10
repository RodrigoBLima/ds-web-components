import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,tsx}"], // colocar na raiz do projeto
    ignores: ["eslint.config.mjs"],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
    extends: ["js/recommended", prettier],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        sourceType: "module",
      },
    },
  },
  tseslint.configs.recommended,
]);
