const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    webpack: (config, {
        src,
        target,
        dev,
        vendor
    }) => {
        config.resolve.extensions.push(".vue");
        config.module.rules.push(
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        );
        config.plugins.push(new VueLoaderPlugin());
        // config.plugins.push(new MiniCssExtractPlugin());

        return config
    }
}
