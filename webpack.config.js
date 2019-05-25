// required for path resolution for dist folder
const path = require("path");
// used to access the BannerPlugin
const webpack = require("webpack");
// required for pretty format for the Userscript banner
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: "./src/main.ts",
    devtool: 'none',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "lib.user.js"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: stripIndent`
            // ==UserScript==
            // @name         杀脚本哥的脚本v20190525
            // @namespace    https://vtbs.moe/
            // @version      2.0.190525
            // @description  bug还有一吨...
            // @author       bilibili-dd-center/3Shain
            // @include      https://live.bilibili.com/*
            // @downloadURL  https://github.com/bilibili-dd-center/bilibili-live-noscript/raw/master/dist/lib.user.js
            // @updateURL    https://github.com/bilibili-dd-center/bilibili-live-noscript/raw/master/dist/lib.user.js     
            // @grant        none
            // ==/UserScript==`
        })
    ]
};