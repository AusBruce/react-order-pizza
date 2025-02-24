module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // Enables automatic JSX runtime (React 17+)
    'plugin:react-hooks/recommended', // Recommended React Hooks rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the installed React version
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'no-unused-vars': 'warn', // Warn for unused variables (instead of throwing an error)
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require importing React explicitly
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
