module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y'],
  rules: {
    'comma-dangle': 'off',
    'no-console': 'warn',
    semi: 'off',
    eqeqeq: 'off',
    'react-hooks/rules-of-hooks': 'error', // Kiểm tra rules của hooks React
    'react-hooks/exhaustive-deps': 'warn', // Kiểm tra dependencies của hooks
    'jsx-a11y/alt-text': 'warn', // Kiểm tra alt text trong JSX
    'jsx-a11y/anchor-is-valid': 'warn', // Kiểm tra anchor hợp lệ
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [['@src', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
