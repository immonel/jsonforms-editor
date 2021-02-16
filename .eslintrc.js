module.exports = {
  extends: ['react-app'],
  plugins: ['simple-import-sort'],
  rules: {
    // use sorting of simple-import-sort and disable others
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
  },
};
