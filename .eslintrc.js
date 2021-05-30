module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended' // Make sure this is always the last element in the array.
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source

    camelcase: 'off',

    // Typescript
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': [
      'error',
      {
        ignoredNamesRegex: '^_',
        ignoreArgsIfArgsAfterAreUsed: true
      }
    ],

    // React
    'react/prop-types': 'off',
    'react/display-name': 'off'
  }
}
