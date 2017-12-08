const path = require('path');

// entry point is -> output the final bundle file


//expose something to another file
module.exports = {
    entry: './src/app.jsx',
    output: {
        //__dirname default project directory path.join from node path library
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            //what files we need to run it on
            test: /\.jsx$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //makes debugging for webpack to source map
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}


//loader customize a file before running