const path = require('path');
module.exports = {
    mode:'production',
    entry: {
        contentscript: './src/contentscript.js',
        contact: './src/popup.js'},
    output: {
        filename: './build/[name].js',
        path: path.resolve(__dirname)
    }
};