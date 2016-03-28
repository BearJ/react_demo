var webpack = require('webpack');

module.exports = {
    // entry: './js/entry.js',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './js/app.js' // Your appʼs entry point
    ],
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css!autoprefixer'},
            {test: /\.less$/, loader: 'style!css!autoprefixer!less'},
            {test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin() // 用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
    ]
};