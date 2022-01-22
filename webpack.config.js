// const path = require('path')


const main = {
    entry: './src/index.js',
    output: {
        filename: './dist/main.js',
        publicPath: 'publicPath for main'
    }
};

const admin = {
    entry: './admin/src/admin.js',
    output: {
        filename: './admin/adminBundle.js',
        publicPath: 'publicPath for admin'
    }
};
const table = {
    entry: './admin/src/table.js',
    output: {
        filename: './admin/table.js',
        publicPath: 'publicPath for table'
    }
};

module.exports = [main, admin, table];


// const main = {
//     context: path.resolve(__dirname, 'src'),
//     entry: "./index.js",
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }
// const admin = {
//     context: path.resolve(__dirname, 'admin/src'),
//     entry: "./admin.js",
//     output: {
//         filename: 'adminBundle.js',
//         path: path.resolve(__dirname, 'admin/dist')
//     }
// }
// module.exports = [main, admin]

