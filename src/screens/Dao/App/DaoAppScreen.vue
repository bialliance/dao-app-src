<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <template v-if="appType==='voting'">
                    <DaoAppVoting :address="appAddress" />
                </template>
                <template v-else-if="appType==='finance'">
                    <DaoAppFinance :address="appAddress" />
                </template>
                <template v-else-if="appType==='tokens'">
                    <DaoAppTokens :address="appAddress" />
                </template>
                <template v-else-if="appType==='agent'">
                    <DaoAppAgent :address="appAddress" />
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import DaoAppAgent from '_features/apps/components/DaoAppAgent'
    import DaoAppFinance from '_features/apps/components/DaoAppFinance'
    import DaoAppTokens from '_features/apps/components/DaoAppTokens'
    import DaoAppVoting from '_features/apps/components/DaoAppVoting'

    export default {
        name: 'DaoAppScreen',

        components: {
            DaoAppAgent,
            DaoAppFinance,
            DaoAppTokens,
            DaoAppVoting,
        },

        data: () => ({
            appType: '',
        }),

        computed: {
            appAddress() {
                return this.$route.params.appAddress
            },
        },

        watch: {
            appAddress: {
                handler(appAddress) {
                    this.getAppType(appAddress)
                },
                immediate: true,
            },
        },

        methods: {
            getAppType(appAddress) {
                switch (appAddress) {
                    case 'appTokens':
                        this.appType = 'tokens'
                        break
                    case 'appVoting':
                        this.appType = 'voting'
                        break
                    case 'appFinance':
                        this.appType = 'finance'
                        break
                    case 'appAgent':
                        this.appType = 'agent'
                        break
                }
            },
        },
    }
</script>
