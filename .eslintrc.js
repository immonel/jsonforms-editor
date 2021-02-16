module.exports = {
  extends: ['react-app'],
  plugins: ['header', 'simple-import-sort'],
  rules: {
    // use sorting of simple-import-sort and disable others
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
    // header
    'header/header': [
      2,
      'block',
      [
        '*',
        ' * ---------------------------------------------------------------------',
        ' * Copyright (c) 2020 EclipseSource Munich',
        ' * Licensed under MIT',
        ' * https://github.com/eclipsesource/jsonforms-editor/blob/master/LICENSE',
        ' * ---------------------------------------------------------------------',
        ' ',
      ],
    ],
  },
};
