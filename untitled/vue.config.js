module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.99.195.120:18080/',
                // target: 'http://localhost:18080/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
};