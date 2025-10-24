import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },

  
  pluginReact.configs.flat.recommended,

  
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettier.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "warn", 
    },
  },
]);