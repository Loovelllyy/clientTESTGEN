const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '~media': path.resolve(__dirname, 'src/media')
        }
    },
    performance: { hints: false },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',
                            "@babel/preset-react",  [
                                "@emotion/babel-preset-css-prop",
                                {
                                    "autoLabel": "dev-only",
                                    "labelFormat": "[local]",
                                    "useBuiltIns": false,
                                    "throwIfNamespace": true
                                }
                            ],
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties',
                            "transform-class-properties", "@emotion",
                            ["@babel/plugin-transform-runtime",
                                {
                                    "regenerator": true
                                }
                            ]],
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/media/[name].[ext]',
                        }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            // {
            //     client: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            //     exclude: /\.module\.css$/,
            // },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin(),

    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}