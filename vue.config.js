const packageJSON = require('./package.json')
const path = require('path')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const name = 'Cripto'
const shortName = 'Cripto'
const primaryColor = '#6f56fd'
const primaryVariantColor = '#2225c3'

module.exports = {
    devServer: {
        disableHostCheck: true
    },
    pwa: {
        name: name,
        // Theme
        themeColor: primaryVariantColor,
        msTileColor: primaryColor,
        // iOS status bar
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent',
        // Manifest
        manifestOptions: {
            name: name,
            short_name: shortName,
            lang: 'ru',
            start_url: './index.html',
            display: 'standalone',
            background_color: primaryVariantColor,
            theme_color: primaryVariantColor,
            icons: [
                {
                    src: './img/icons/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: './img/icons/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: './img/icons/favicon-32x32.png',
                    sizes: '32x32',
                    type: 'image/png',
                },
                {
                    src: './img/icons/favicon-16x16.png',
                    sizes: '16x16',
                    type: 'image/png',
                },
                {
                    src: './img/icons/apple-touch-icon-152x152.png',
                    sizes: '152x152',
                    type: 'image/png',
                },
                {
                    src: './img/icons/msapplication-icon-144x144.png',
                    sizes: '144x144',
                    type: 'image/svg',
                },
            ],
        },
        // Service Worker
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/, 'robots.txt'],
        },
    },
    publicPath: '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist/' : 'dist/',
    transpileDependencies: [
        'vuetify',
    ],
    chainWebpack: (config) => {
        // this path is specific to my project
        config.resolve.alias.set('_api', path.resolve('src/api/'))
        config.resolve.alias.set('_entities', path.resolve('src/entities/'))
        config.resolve.alias.set('_features', path.resolve('src/features/'))
        config.resolve.alias.set('_router', path.resolve('src/router/'))
        config.resolve.alias.set('_screens', path.resolve('src/screens/'))
        config.resolve.alias.set('_services', path.resolve('src/services/'))
        config.resolve.alias.set('_store', path.resolve('src/store/'))
        config.resolve.alias.set('_ui', path.resolve('src/ui/'))
        config.resolve.alias.set('_utils', path.resolve('src/utils/'))
    },
    configureWebpack: {
        plugins: [
            new WebpackBuildNotifierPlugin({
                title: `${packageJSON.name} Build`,
                suppressSuccess: true,
            }),
        ],
    },
}
