const path = require('path');

module.exports = {
    mode: 'production',
    // mode: 'none',
    // mode: 'development',
    entry: {
        index: [
                './src/index.js',
            ],
        qrcode: './src/qrcode.js',
        minterjs_wallet: './src/minterjs-wallet.js',
        // minter_js_sdk: './src//minter-js-sdk',
},

    output: {
        path: path.resolve(__dirname, 'docs/js'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: 'docs/js',
        // filename: 'main.js'
    },
    devtool: "source-map"
};
