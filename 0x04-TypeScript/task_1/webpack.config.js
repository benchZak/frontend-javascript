const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

        devServer: {
                  contentBase: "./dist",
                  port: 8080,
                  host: '0.0.0.0', // Crucial for Docker
                  public: 'localhost:8080', // Helps with Docker networking
                  hot: true,
                  overlay: true, // Shows errors in browser
                  open: true, // Optional: automatically open browser
                  watchContentBase: true // Enable hot reload for content in dist
        },
        
 
  plugins: [ 
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: { 
    filename: "bundle.js", 
    path: path.resolve(__dirname, "dist")
  } 
};
