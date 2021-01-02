module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://39.99.195.120:18080/',
                target: 'http://localhost:18080/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        const fileRule = config.module.rule('file')
        fileRule.uses.clear()
        fileRule
            .test(/\.pdf|ico$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                limit: 10000,
            })
    },
}