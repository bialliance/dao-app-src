<template>
    <v-container :class="{'fill-height': !daoList.length}">
        <v-row :align="daoList.length ? '' : 'center'" :justify="daoList.length ? '' : 'center'">
            <template v-for="(dao, index) in daoList">
                <v-col cols="3" :key="`dao_${index}`">
                    <v-card class="text-center">
                        <v-responsive :aspect-ratio="1">
                            <v-container class="fill-height">
                                <v-row justify="center">
                                    <v-col cols="auto">
                                        <v-card-title class="justify-center">
                                            {{ dao.title }}
                                        </v-card-title>
                                        <v-card-text>
                                            {{ dao.text }}
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn :to="{name: 'DaoView', params:{daoAddress: 'gfdvfv89'}}">
                                                Go To DAO
                                            </v-btn>
                                        </v-card-actions>
                                        <v-divider class="mx-4" />
                                        <v-card-text>
                                            <v-chip small>{{ dao.status }}</v-chip>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-responsive>
                    </v-card>
                </v-col>
            </template>
            <v-col cols="3">
                <v-card>
                    <v-responsive :aspect-ratio="1">
                        <v-container class="fill-height">
                            <v-row justify="center">
                                <v-col cols="auto">
                                    <v-btn color="primary" icon x-large @click="createDao()">
                                        <v-icon v-text="'$plus'" />
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'DaoManagerScreen',

        data: () => ({
            daoList: [],
        }),

        mounted() {
            setTimeout(() => {
                this.fetchDaoList()
            }, 1500)
        },

        methods: {
            fetchDaoList() {
                for (let i = 1; i <= 6; i++) {
                    this.daoList.push({
                        title: `Title ${i}`,
                        text: 'Lorem Ipsum',
                        status: i % 2 ? 'pending..' : 'ready',
                    })
                }
            },

            createDao() {
                this.$router.push({ name: 'DaoNew' })
            },
        },
    }
</script>
