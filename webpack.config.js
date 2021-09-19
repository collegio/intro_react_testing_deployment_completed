const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
    const isProduction = env === 'production';
    // const CSSExtract = new ExtractTextPlugin('styles.css');
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css'
    });

    return {
        entry: './src/app.js',    // the entry point of the application
        output: {
            path: path.join(__dirname, 'public'),   // output to public folder
            filename: 'bundle.js'                   // output bundled JavaScript as bundle.js
        },
        module: {
            rules: [{
                loader: 'babel-loader',     // the specific loader
                test: /\.js$/,              // the file types to convert
                exclude: /node_modules/     // we don't need to convert anything in this folder!
            }, 
            {
                test: /\.s?css$/,
                // use: CSSExtract.extract({
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
                // })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};

/* 
    NOTE: the above test and exclude property values are what are known as 
          REGULAR EXPRESSIONS.
*/



