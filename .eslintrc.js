module.exports = {
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
    ],
    overrides: [
        {
            // Для vue выключаем общее выравнивание т.к. у него своё
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    root: true,
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // Possible Errors
        'for-direction': 'warn',
        //
        //
        // Stylistic Issues
        // Правило обеспечивает согласованный стиль привязки для блоков.
        'brace-style': ['error', '1tbs'],
        // Обеспечить соблюдение соглашения об именах Camelcase
        camelcase: ['warn'],
        // Конечные запятые
        'comma-dangle': ['error', 'always-multiline'],
        // Отступы (4 пробела)
        indent: ['error', 4, { SwitchCase: 1 }],
        // Правило обеспечивает последовательное использование точек с запятой.
        semi: ['warn', 'never'],
        // Пробел перед открывающейся круглой скобкой в объявлении функции
        'space-before-function-paren': [
            'warn', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        //
        //
        // ECMAScript 6
        'arrow-parens': ['error', 'always'],
        //
        //
        // Vue
        'vue/custom-event-name-casing': ['warn'],
        'vue/no-mutating-props': ['warn'],
        'vue/order-in-components': ['error'],
        'vue/script-indent': [
            'error', 4, {
                baseIndent: 1,
                switchCase: 1,
                ignores: [],
            },
        ],
        'vue/valid-v-slot': ['warn'],
        //
        //
        // Promise
        'prefer-promise-reject-errors': ['warn'],
    },
}
