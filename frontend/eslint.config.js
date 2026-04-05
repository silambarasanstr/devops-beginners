import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // ✅ FIRST → React recommended
  pluginReact.configs.flat.recommended,

  // ✅ NEXT → Your custom config (override)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    plugins: {
      js,
      react: pluginReact,
    },

    extends: ["js/recommended"],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      // 🔥 NOW இது override ஆகும்
      "react/prop-types": "off",
      "semi": ["error", "always"],
    },
  },
]);