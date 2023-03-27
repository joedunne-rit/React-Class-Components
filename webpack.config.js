const path = require('path');

module.exports = {
    entry: {
        example1: './client/example1.jsx',
        example2: './client/example2.jsx',
        example3: './client/example3.jsx'
    },
    module: {
        rules: [
            {
                //test if things end in js or jsx
                test: /\.(js|jsx)$/,
                //exclude files in this folder
                exclude: /node_modules/,
                //if above requirements are met, file is run through this
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]bundle.js',
    },
};