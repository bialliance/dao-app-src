<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                DAO
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ daoAddress }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list dense rounded>
                        <v-list-item v-for="app in apps" :key="app.title" link>
                            <v-list-item-icon>
                                <v-icon v-text="`$${app.icon}`" />
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ app.title }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-list>
            </v-col>
            <v-col cols="9">
                <router-view />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'DaoNavigator',

        data: () => ({
            apps: [
                { title: 'Home', icon: 'home' },
                { title: 'Tokens', icon: 'mdi-coins' },
                { title: 'Voting', icon: 'mdi-vote' },
                { title: 'Finance', icon: 'mdi-finance' },
                { title: 'Agent', icon: 'mdi-robot' },
            ],
            right: null,
        }),

        computed: {
            daoAddress() {
                return this.$route.params.daoAddress
            },
        },
    }
</script>
