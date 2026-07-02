import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    files: ['**/*.ts'],

    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      eslintConfigPrettier,
    ],

    processor: angular.processInlineTemplates,

    rules: {
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Component'],
        },
      ],

      '@angular-eslint/component-max-inline-declarations': [
        'error',
        {
          template: 6,
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'fa',
          style: 'kebab-case',
        },
      ],

      '@angular-eslint/directive-class-suffix': [
        'error',
        {
          suffixes: ['Directive'],
        },
      ],

      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'fa',
          style: 'camelCase',
        },
      ],

      '@angular-eslint/no-host-metadata-property': 'off',
      '@angular-eslint/no-queries-metadata-property': 'error',

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],

      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],

      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      'no-empty': 'error',
      'no-fallthrough': 'off',
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },
);
