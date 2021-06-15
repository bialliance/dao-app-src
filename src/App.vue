<template>
    <v-app>
        <template v-if="isInitializing">
            <v-container class="primary fill-height fill-width" fluid>
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

        created() {
            this.bootstrap()

            console.log(this.$vuetify.lang.translator('key1'))
            console.log(this.$vuetify.lang.translator('key2'))
            console.log(this.$vuetify.lang.translator('namespace.key3'))
            console.log(this.$vuetify.lang.translator('test.namespace.key4'))
        },

        methods: {
            async bootstrap() {
                await this.listenSoftwareUpdate()

                await new Promise((resolve) => setTimeout(() => resolve(), 500))

                this.isInitializing = false
            },

            listenSoftwareUpdate() {
                if (process.env.NODE_ENV === 'production') {
                    document.addEventListener(
                        'serviceWorkerUpdated',
                        this.onServiceWorkerUpdated,
                        { once: true },
                    )

                // navigator.serviceWorker.addEventListener('controllerchange', () => {
                //     if (this.$store.state.softwareUpdate.isUpdating) {
                //         return
                //     }

                //     this.$store.commit('softwareUpdate/setUpdating', true)

                //     window.location.reload()
                // })
                }
            },

            onServiceWorkerUpdated(event) {
                // Обновление найдено
                this.$store.dispatch(
                    'softwareUpdate/setServiceWorkerRegistration',
                    event.detail,
                )

                const serviceWorkerRegistration = this.$store.state.softwareUpdate
                    .serviceWorkerRegistration

                this.$root.pushNotification({
                    text: 'Новая версия ПО',
                    action: {
                        text: 'Обновить',
                        click: async () => {
                            await this.$store.dispatch('softwareUpdate/update', {
                                serviceWorkerRegistration,
                            })
                            this.$router.go()
                        },
                    },
                })
            },
        },
    }
</script>

<style lang="scss">
@import "@/sass/_variables.scss";

#app {
    font-family: Helvetica, Avenir, Arial, sans-serif;
    color: rgba(47, 47, 47, 1);
    background: #fbfbfb;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
}

.header__switcer {
    display: flex;
}

.v-input__control {
    .v-input__slot {
        margin-bottom: 0;
    }

    .v-messages {
        display: none;
    }
}

.v-input--switch__thumb {
    background: -webkit-linear-gradient(#6280ec, #be56fe);
}

.v-input--switch__track.theme--light {
    background-color: #ffffff;
    box-shadow: 0px 2px 12px rgba(73, 73, 73, 0.16);
}

.header__right button:first-child {
    margin-right: 30px;
}

.header__right button:nth-child(2) {
    margin-right: 40px;
}

button {
    outline: none;

    &:focus {
        outline: none;
    }
}

.nav {
    display: none;
}

@media (min-width: 1300px) {
    .nav_icon__wrapper {
        display: none;
    }
    .nav {
        display: block;
    }
}
</style>
