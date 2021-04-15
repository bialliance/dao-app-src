<template>
    <v-app-bar
        app
        :color="$vuetify.theme.dark ? 'dark' : 'white'"
        :dark="$vuetify.theme.dark"
        :elevate-on-scroll="!$vuetify.theme.dark"
        :light="!$vuetify.theme.dark"
    >
        <v-btn v-if="needShowBackButton" icon @click="$router.back()">
            <v-icon v-text="'$arrowLeft'" />
        </v-btn>

        <v-toolbar-title>
            <v-img v-if="$vuetify.theme.dark" :src="logoDark" width="30" contain />
            <v-img v-else :src="logoLight" width="30" contain />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="primary">
            Connect Metamask
        </v-btn>

        <!--        <v-btn color="primary" text :to="{name: 'SoftwareUpdate'}">-->
        <!--            Обновление ПО-->
        <!--        </v-btn>-->

        <v-switch
            v-model="$vuetify.theme.dark"
            class="ml-5"
            hide-details
            inset
        >
            <template v-slot:label>
                <v-icon v-if="$vuetify.theme.dark" v-text="'$moon'" />
                <v-icon v-else v-text="'$sun'" />
            </template>
        </v-switch>
    </v-app-bar>
</template>

<script>
    import { forEach as _forEach } from 'lodash'

    import logoDark from '@/assets/dark.png'
    import logoLight from '@/assets/light.png'

    export default {
        name: 'UIAppBar',

        data: () => ({
            logoDark,
            logoLight,
        }),

        computed: {
            needShowBackButton() {
                return this.$route.meta?.screenOptions?.showBack
            },

            title() {
                let title
                _forEach(this.$route.matched, (route) => {
                    const screenOptions = route.meta?.screenOptions

                    if (screenOptions?.title) {
                        title = screenOptions.title
                    }
                })

                return title
            },
        },
    }
</script>
