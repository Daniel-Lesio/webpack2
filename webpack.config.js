const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : './src/js/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'bundle.js'
    },
    mode : 'development',
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
            }

            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader : "html-loader",
                        options : {minimize : false}
                    }
                ]
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/,
                use : [
                    'file-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                 use : [
                       {
                           loader : MiniCssExtractPlugin.loader
                       },
                      {
                         loader : "css-loader",
                     },
                     {
                         loader : "postcss-loader"
                     },
                     {
                         loader : 'sass-loader',
                         options :{
                            
                             implementation : require("sass")
                         }
                     }
                 ]
            }
    
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            filename : "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
          })
    ]   
}

