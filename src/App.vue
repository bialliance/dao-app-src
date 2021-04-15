<template>
    <v-app>
        <template v-if="isInitializing">
            <v-container class="primary fill-height" fluid>
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-progress-circular indeterminate color="white" />
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template v-else>
            <UISystemBar />

            <UIAppBar />

            <v-main>
                <router-view />
            </v-main>

            <UISnackbar />
        </template>
    </v-app>
</template>

<script>
    import UIAppBar from '_ui/UIAppBar'
    import UISystemBar from '_ui/UISystemBar'
    import UISnackbar from '_ui/UISnackbar'

    export default {
        name: 'App',

        components: {
            UIAppBar,
            UISnackbar,
            UISystemBar,
        },

        data: () => ({
            isInitializing: true,
        }),

        computed: {
            isDAOListScreen() {
                return this.$route.matched.some((route) => route.name === 'DAOList')
            },
        },

        watch: {
            isInitializing(isInitializing) {
                if (!isInitializing) {
                    this.toDAOList()
                }
            },
        },

        created() {
            // Application initialization. Step 4 [App] - App created

            // Application initialization. Step 5 [App] - Listen Software Update
            this.listenSoftwareUpdate()

            setTimeout(() => {
                this.isInitializing = false
            }, 500)

            console.log(this.$vuetify.lang.translator('key1'))
            console.log(this.$vuetify.lang.translator('key2'))
            console.log(this.$vuetify.lang.translator('namespace.key3'))
            console.log(this.$vuetify.lang.translator('test.namespace.key4'))
        },

        methods: {
            // Application initialization. Step 5 [App] - Listen Software Update
            listenSoftwareUpdate() {
                if (process.env.NODE_ENV === 'production') {
                    document.addEventListener('serviceWorkerUpdated', this.onServiceWorkerUpdated, { once: true })

                    navigator.serviceWorker.addEventListener('controllerchange', () => {
                        if (this.$store.state.softwareUpdate.isUpdating) {
                            return
                        }

                        this.$store.commit('softwareUpdate/setUpdating', true)

                        window.location.reload()
                    })
                }
            },

            onServiceWorkerUpdated(event) {
                // Обновление найдено
                this.$store.dispatch('softwareUpdate/setServiceWorkerRegistration', event.detail)

                const serviceWorkerRegistration = this.$store.state.softwareUpdate.serviceWorkerRegistration

                this.$root.pushNotification({
                    text: 'Новая версия ПО',
                    action: {
                        text: 'Обновить',
                        click: () => {
                            this.$store.dispatch('softwareUpdate/update', {
                                serviceWorkerRegistration,
                            })
                        },
                    },
                })
            },

            // -----------------------------------------------------------------

            toDAOList() {
                if (!this.isDAOListScreen) {
                    this.$router.push({ name: 'DAOList' })
                }
            },
        },
    }
</script>
