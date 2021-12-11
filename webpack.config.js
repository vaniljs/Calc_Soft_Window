const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    output: {
        filename: 'script.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: [path.resolve(__dirname, "dist"), path.resolve(__dirname, "dist")],
        watchContentBase: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(c|sa)ss/,
                use: [
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                    
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // Относительные пути картинок
                        name: f => {
                            let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), path.dirname(f));
                            return `${dirNameInsideAssets}/[name].[ext]`;
                        },
                        esModule: false,
                      }
                },
                {
                    // сжатие картинок
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        },
                    }
                }
            ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]'
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
}