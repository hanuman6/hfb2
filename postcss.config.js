//対応ブラウザ
var AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  'ie >= 11',
  'iOS >= 9',
  'Android >= 4.4'
];
module.exports = {
  plugins: [
    // ベンダープレフィックスを自動付与する
    require('autoprefixer')({
      browsers: AUTOPREFIXER_BROWSERS
    }),
    // CSSの余計な空白文字/改行を除去する
    require('cssnano')(),
  ],
};