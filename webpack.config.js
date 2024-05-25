const path = require('path');

module.exports = {
    // Other Webpack configuration options...
    module: {
        rules: [
            {
                test: /\.node$/,
                use: 'file-loader',
            },
        ],
    },
};