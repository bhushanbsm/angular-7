module.exports = {
    mode: 'development',
    entry:['babel-polyfill','./src/main.js'],
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                options:{
                presets:['es2015'],
                }
        }
      ],
      
    },
    devServer: {
        port: 3000
    }
};