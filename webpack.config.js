const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = (env, argv) => {
  if (argv.mode != "production" && argv.mode != "development") {
    console.log("Incorrect argument mode")
    console.log("Example: --mode <production|development>")
    process.exit(0)
  }
  const isProd = argv.mode == "production"
  const isDev = argv.mode == "development"

  return {
    mode: argv.mode,
    entry: {
      main: [
        "@babel/polyfill",
        path.resolve(__dirname, "src/index.js")
      ]
    },
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: [".js", ".json", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.(css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        }
      ]
    },
    performance: {
      hints: false
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true
    },
    devtool: "inline-source-map",
    optimization: isProd ? {
      splitChunks: {
        chunks: "all"
      },
      minimizer: [
        new OptimizeCssAssetWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
    } : {},
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        minify: {
          collapseWhitespace: isProd
        }
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public/icon.png"),
            to: path.resolve(__dirname, "dist")
          }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css"
      }),
      new CleanWebpackPlugin()
    ]
  }
}
