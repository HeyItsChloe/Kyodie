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
            test: /\.jsx?/, 
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
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //       'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            //       'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //     ]
            // }
            // {
            //     include: SRC,
            //     test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: [ 'file-loader' ],
            //   },
            {
            test: /\.(png|jpg|gif)$/i,
            use: [{
                //loader: "file?name=[path][name].[ext]",
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    //name: '[path][name].[ext]'
                }
                }]
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