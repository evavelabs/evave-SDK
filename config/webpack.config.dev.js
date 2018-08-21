const paths = require('./paths')
const webpack = require('webpack')

module.exports = {
    entry: [require.resolve('./polyfills'), paths.appIndexJs],
    output: {
        path: paths.appBuild,
        filename: 'bundle-dev.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}