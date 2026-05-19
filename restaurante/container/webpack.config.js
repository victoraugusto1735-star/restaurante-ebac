const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",

  devServer: {
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",

      remotes: {
        cardapio: "cardapio@http://localhost:3001/remoteEntry.js",
        pedido: "pedido@http://localhost:3002/remoteEntry.js"
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: false
        },

        "react-dom": {
          singleton: true,
          requiredVersion: false
        }
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};