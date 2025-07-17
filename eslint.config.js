import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintParserTypeScript from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**'],
    files: ['**/*.ts'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      ...eslintPluginTypeScript.configs['eslint-recommended'].rules,
      ...eslintPluginTypeScript.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      // Add custom rules here if needed
    },
  },
];
