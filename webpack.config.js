/* eslint-disable no-undef */
module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' },
            },
            // SCSS has different line endings than SASS
            // and needs a semicolon after the import.
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^9.0.0
                        options: {
                            // This is the path to your variables
                            additionalData: '@import \'@/scss/variables.scss\';',
                        },
                    },
                ],
            },
            // Images
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    'vue-loader',
                    'vue-svg-loader',
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            _api: path.resolve(__dirname, 'src/api/'),
            _entities: path.resolve(__dirname, 'src/entities/'),
            _features: path.resolve(__dirname, 'src/features/'),
            _router: path.resolve(__dirname, 'src/router/'),
            _screens: path.resolve(__dirname, 'src/screens/'),
            _services: path.resolve(__dirname, 'src/services/'),
            _store: path.resolve(__dirname, 'src/store/'),
            _ui: path.resolve(__dirname, 'src/ui/'),
            _utils: path.resolve(__dirname, 'src/utils/'),
        },
    },

    output: {
        globalObject: 'this',
    },
}
