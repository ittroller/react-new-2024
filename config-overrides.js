/* eslint-disable @typescript-eslint/no-var-requires */

const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
  }),
);
