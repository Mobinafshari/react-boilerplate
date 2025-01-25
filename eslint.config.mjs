import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import { fixupPluginRules } from '@eslint/compat';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['node_modules', 'dist', 'cypress'] },
  { files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}', 'test/**/test.{ts , tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        it: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
      },
    },
  },
  {
    plugins: {
      'testing-library': fixupPluginRules({
        rules: testingLibrary.rules,
      }),
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-undef': 'error',
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-constant-condition': 'off',
    },
  },
];
