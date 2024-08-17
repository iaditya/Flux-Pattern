const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //transpile jsx and es6+
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"] //allow importing js and jsx files without specifying extensions.
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        open: true
    },
    mode: "development"
}