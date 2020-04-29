const path = require ('path');

module.exports = {
    entry: './assets/js/index.js',
    output: { 
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js',
      },
    mode : process.env.NODE_ENV,
    module: { 
        rules: [
            {
            test: /\.jsx?$/, 
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
            },
            {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: "file-loader",
                //loader: 'url-loader',
                options: {
                    //limit: 8192,
                    regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
                    /* file loder generate w/ commonJS module syntax instead of ES module. to enable that, set ES to false */
                    esModule: false,
                    name: '[path][name].[ext]'
                }
                }]
            },
            {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                }
                }]
            },
            {
            test: /\.json$/,
            loader: 'json-loader'
            }
        ],
    }, 
    devServer: { 
        publicPath: 'http://localhost:8080/build/', 

        proxy: {
            '/': 'http://localhost:3000' 
        }
      }
}