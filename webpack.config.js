const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// entry point is -> output the final bundle file
module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                use: CSSExtract.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }

                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        //makes debugging for webpack to source map
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}


//loader customize a file before running