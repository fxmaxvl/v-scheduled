'use strict';

const path                   = require('path');
const webpack                = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin    = require('terser-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry:   {
        index: './src/index.js',
    },
    output:  {
        filename:      `[name].min.js`,
        library:       'default',
        libraryTarget: 'umd',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
        modules:    [__dirname, path.join(__dirname, 'node_modules')],
        alias:      {
            '@': path.join(__dirname, 'src'),
        },
    },
    module:  {
        rules: [
            {
                test:    /\.js$/,
                loader:  'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    fix: true,
                },
            },
            {
                test:    /\.js$/,
                loader:  'babel-loader',
                exclude: /node_modules/,
                include: [__dirname],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENV) }),
        new CleanWebpackPlugin({ verbose: true }),
    ],

    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                parallel:      true,
                sourceMap:     true,
                terserOptions: {
                    compress:        {
                        defaults: false,
                        ecma:     6,
                    },
                    keep_classnames: true,
                    keep_fnames:     true,
                    output:          {
                        comments: false,
                    },
                },
            }),
        ],
    },
};
