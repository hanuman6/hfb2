const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  // Mode指定
  mode: 'production', //productionで圧縮できるよ(基本development)
  // エントリーポイント
  entry: ['./src/index.js'],
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/common/js`,
    // 出力ファイル名
    filename: 'bundle.js',
    // パブリックパス
    publicPath: './'
  },
  // ローカル開発用環境を立ち上げる
  devServer: {
    contentBase: './',
    watchContentBase: true,
    open: true
  },
  //devソースマップ
  devtool: 'cheap-module-eval-source-map',
  //ビルドヒントの制御
  performance: { hints: false },
  //プラグイン
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    }),
    new WebpackBuildNotifierPlugin({
      title: "HFB2 Webpack Build",
      suppressSuccess: true
    })
  ],
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      },
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        // Sassファイルの読み込みとコンパイル
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: true,
              // ソースマップを有効にする
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader',
        options: {
          limit: 200 * 1024, // 200KB以上だったら埋め込まずファイルとして分離する
          name: '../../common/img/[name].[ext]'
        }
      }

    ]
  }
}
