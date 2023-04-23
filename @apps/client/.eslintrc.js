module.exports = {
  extends: ['@config/eslint-config-react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
  },
  rules: {},
  setting: {
    'import/resolver': {
      typescript: './tsconfig.json',
    },
  },
};
