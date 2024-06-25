const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  stats: "errors only",

  entry: "./src/js/index.js",

  output: {
    filename: "js/bundle.js",
    path: __dirname + "/build",
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/projects.html",
      filename: "projects.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/project-details.html",
      filename: "project-details.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/blog.html",
      filename: "blog.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/blog-details.html",
      filename: "blog-details.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/add-blog.html",
      filename: "add-blog.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
    hot: false,
  },
};
