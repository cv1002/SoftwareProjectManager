module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.99.195.120:18080/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
};