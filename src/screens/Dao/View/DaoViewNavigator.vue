<template>
    <v-container :class="{'fill-height': !dao}">
        <v-row v-if="dao">
            <v-col cols="3">
                <div>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="title">
                                    {{ dao.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ dao.address }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider />

                    <v-list>
                        <v-list dense rounded>
                            <template v-for="app in dao.apps">
                                <v-list-item
                                    :key="app.title"
                                    :to="{name: 'DaoApp', params: {appAddress: app.address}}"
                                >
                                    <v-list-item-icon>
                                        <v-icon v-text="`$${app.icon}`" />
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ app.title }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list>
                    </v-list>
                </div>
            </v-col>
            <v-col cols="9">
                <router-view />
            </v-col>
        </v-row>
        <v-row v-else justify="center">
            <v-col cols="auto">
                <v-progress-circular indeterminate color="white" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'DaoViewNavigator',

        data: () => ({
            dao: null,
        }),

        mounted() {
            this.getDaoByAddress(this.$route.params.daoAddress)
        },

        methods: {
            async getDaoByAddress(daoAddress) {
                await new Promise((resolve) => setTimeout(() => resolve(), 1000))

                this.dao = {
                    title: 'ДАО',
                    address: daoAddress,
                    apps: [
                        { title: 'Tokens', icon: 'coins', address: 'appTokens' },
                        { title: 'Voting', icon: 'voteYea', address: 'appVoting' },
                        { title: 'Finance', icon: 'wallet', address: 'appFinance' },
                        { title: 'Agent', icon: 'robot', address: 'appAgent' },
                    ],
                }
            },
        },
    }
</script>
